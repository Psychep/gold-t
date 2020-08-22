function Footer() {
  return (
    <footer className="bg-black ">
      <ul className="flex  justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
        <li>
          Created by{" "}
          <a href="https://" target="_blank" className="font-bold">
            CyberP&#128518;t co
          </a>
        </li>
        <li>
          <a
            href="https://github.com/oddstronaut/tailwind-next"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
