import "./style.css";

const Footer = () => (
     <footer className="footer">
        <p className="footer__name">Tomasz Sampławski 2023</p>
        <p>
          <a
            className="footer__link"
            href="mailto:tsamplawski@gmail.com"
            title="tworzy wiadomość zaadresowaną do mnie"
          >
            wyślij do mnie wiadomość
          </a>
        </p>
        <p>
          <a
            href="https://github.com/samplawski/currency-converter"
            title="otwiera stronę projektu na GitHub"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className="footer__link footer__link--git"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub-icon"
            />
          </a>
        </p>
      </footer>
);

export default Footer;
