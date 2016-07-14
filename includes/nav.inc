  <nav class="navbar">
    <input type="checkbox" class="navbar-state" checked /></input>
    <div class="navbar-content">
      <ul>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">Home.</span>
          <!--#else -->
            <a class="navbar-link" href="/" >Home.</a>
          <!--#endif -->
        </li>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/wedding-day/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">Wedding Day.</span>
          <!--#else -->
            <a class="navbar-link" href="/wedding-day/" >Wedding Day.</a>
          <!--#endif -->
        </li>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/stay/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">Stay.</span>
          <!--#else -->
            <a class="navbar-link" href="/stay/" >Stay.</a>
          <!--#endif -->
        </li>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/entourage/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">Entourage.</span>
          <!--#else -->
            <a class="navbar-link" href="/entourage/" >Entourage.</a>
          <!--#endif -->
        </li>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/our-story/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">Our Story.</span>
          <!--#else -->
            <a class="navbar-link" href="/our-story" >Our Story.</a>
          <!--#endif -->
        </li>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/registry/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">Registry.</span>
          <!--#else -->
            <a class="navbar-link" href="/registry/" >Registry.</a>
          <!--#endif -->
        </li>
        <li>
          <!--#if expr="$DOCUMENT_URI = '/rsvp/index.html'" -->
            <span class="navbar-link current" role="link" aria-disabled="true">RSVP.</span>
          <!--#else -->
            <a class="navbar-link" href="/rsvp/" >RSVP.</a>
          <!--#endif -->
        </li>
      </ul>
    </div>
  </nav>
