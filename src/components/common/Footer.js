export default function Footer() {
  return (
    <footer className="p-5 bg-dark text-white text-center">
      <div class="row">
        <div class="row footer-widget">
          <div
            style={{ margin: "auto", width: "200px" }}
            class="col-md-2 col-sm-6 col-md-offset-1 res-margin"
          >
            <h6>Useful Links</h6>
            <div class="spce"></div>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a href="https://gcbuying.com/about-us">Home</a>
              </li>
              <li>
                <a href="https://gcbuying.com/about-us">Contact Us</a>
              </li>
              <li>
                <a href="https://gcbuying.com/privacy">Privacy Policy</a>
              </li>
             
            </ul>
          </div>
        </div>
        <div class="spce md"></div>
        <div class="spce"></div>
        <div class="copyright text-center light">
          2021 Copyright <strong>Gcbuying</strong> . ALL RIGHTS RESERVED
        </div>
      </div>
      <div className="container">
        <p className="lead">
          Copyright &copy; 2023 Copyright GiftCardsng . ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
