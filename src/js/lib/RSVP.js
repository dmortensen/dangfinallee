'use strict';

var Post = require('jquery').post;

function RSVP () {
  this.form = document.querySelector( '.form' );
  this.content = document.querySelector( '.form-content' );
  this.submitBtn = this.form.querySelector( 'button[type="submit"]' );

  this._btnController = this._btnController.bind(this);
  this.submitBtn.onclick = this._btnController;
}

var proto = RSVP.prototype;

proto._btnController = function ( evt ) {
  var el = evt.target;
  var attr = el.getAttribute( 'name' );

  if ( attr == 'lookup' ) {
    el.setAttribute( 'name', 'rsvp' );
    this._getList();
  } else if ( attr == 'rsvp' ) {
    el.style.display = 'none';
    this._rsvp();
  }
};

proto._getList = function () {
  var _this = this;
  var params = {};
  var html = '';

  params['key'] = this.form.querySelector('[name="fullname"]').value;

  var list = Post( '/dist/scripts/php/return_list.php', params, function ( data ) {

    if ( data.status == 'success' ) {
      var result = data.result;

      result.forEach( function( el, idx, array ) {
        html += '<div class="invitee">';
        html += '<label class="underline">' + el + '</label>';
        html += '<div class="dropdown">';
        html += '<select class="rsvp dropdown-content" name="rsvp">';
        html += '<option value="yes:' + el + '"> Am Attending</option>';
        html += '<option value="no:' + el + '"> Cannot Attend</option>';
        html += '</select>';
        html += '</div></div>';
      });

      html += '<p>the festivities.</p>'
    } else {
      html = '<p>' + data.status + '</p>';
      _this.submitBtn.style.display = 'none';
    }

    _this.content.innerHTML = html;
  }, 'json');
};

proto._rsvp = function () {
  var _this = this;
  var rsvps = this.form.querySelectorAll( '.rsvp' );
  var params = {};
  var yes = '';
  var no = '';
  var html = '';

  rsvps.forEach( function ( el, idx, array ) {
    var answer = el.options[el.selectedIndex].value.split( ':' );

    if ( answer[0] == 'yes'){
      yes += answer[1] + ',';
    } else {
      no += answer[1] + ',';
    }
  });

  // console.log("Yes: "+yes);
  // console.log("No "+no);

  params['yes'] = yes;
  params['no'] = no;

  var reserve = Post( '/dist/scripts/php/rsvp.php', params, function ( data ) {
    if ( data.status == 'success' ) {
      html = '<p>Thank you!</p>';
    } else {
      html = '<p>Error: Could no process your request.</p>';
    }

    _this.form.innerHTML = html;
  }, 'json');
};

module.exports = RSVP;
