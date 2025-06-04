import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container">
          <Image className="logo" src="/images/logo.svg" alt="logo" width={100} height={50} />
          <nav>
            <ul className="left-menu">
              <li><a href="#">Main</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">News</a></li>
            </ul>
            <ul className="right-menu">
              <li><a href="#"><Image src="/images/icons/scroll.svg" alt="scroll" className="header-icon" width={24} height={24} /></a></li>
              <li><a href="#"><Image src="/images/icons/search.svg" alt="search" className="header-icon" width={24} height={24} /></a></li>
              <li><a href="#"><Image src="/images/icons/settings.svg" alt="settings" className="header-icon" width={24} height={24} /></a></li>
              <li><a href="#"><Image src="/images/icons/profile.svg" alt="profile" className="header-icon" width={24} height={24} /></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="news-article">
        <div className="news-content">
          <div className="news-meta">
            <Image src="/images/icons/user.svg" alt="user" className="user-icon" width={20} height={20} />
            <span className="author">Sitrix</span>
            <Image src="/images/icons/date.svg" alt="date" className="date-icon" width={20} height={20} />
            <span className="date">08 March 2025</span>
            <Image src="/images/icons/views.svg" alt="views" className="views-icon" width={20} height={20} />
            <span className="views">1245</span>
          </div>

          <h1 className="news-title">
            It&apos;s official: The second season of &quot;Solo Leveling&quot; is announced for 2026!
          </h1>
          <Image src="/images/banner.png" alt="banner" className="news-image" width={800} height={400} />
          <p className="news-text">
            Fans of the popular Solo Leveling anime can rejoice: A-1 Pictures has finally announced
            about the start of work on the second season of the series. The announcement was made during a special panel at
            the Anime Expo festival 2025, which featured a short teaser that instantly blew up the web.
            <br /><br />
            The continuation of the story of Song Jin-Woo, a hunter who strives to become the strongest in the
            world, will span an arc &quot;Reds gate&quot; from Jang Sung Rak&apos;s original manhwa. The director of the first season,
            Shunsuke Nakashige, will return to the project, promising even more dynamic battles and deeper character development.
            The release date is currently set for spring 2026, and streaming will continue to be available on Crunchyroll.
            <br /><br />
            &quot;We are impressed by the support of the fans and want to give a gift them something really epic&quot; - commented
            the representatives of the studio. Meanwhile, the teaser showed a hint of the appearance of new
            powerful enemies and the long-awaited return of favorite heroes. Is Song Jin-Woo ready for new challenges?
            We are waiting looking forward to it!
          </p>
        </div>

        <aside className="sidebar">
          <div className="sidebar-content">
            <h2 className="sidebar-title">Last news</h2>
            <Image src="/images/icons/x.svg" alt="x" className="x-icon" width={20} height={20} />
          </div>
          <div className="news-all">
            <div className="news-1">
              <div className="info1">
                <Image src="/images/icons/date.svg" alt="date" className="date-icon" width={16} height={16} />
                <span className="date">08.05.2025</span>
                <Image src="/images/icons/views.svg" alt="views" className="views-icon" width={16} height={16} />
                <span className="views">1245</span>
              </div>
              <h1 className="news-title">
                It&apos;s official: The second season of &quot;Solo Leveling&quot; is announced for 2026!
              </h1>
              <p className="news-text">
                In a short time, Sakura not only found loyal friends, with whom he would go into fire and water, but also
                became a captain
              </p>
              <div className="info2">
                <Image src="/images/icons/user.svg" alt="user" className="user-icon1" width={16} height={16} />
                <span className="author1">Sitrix</span>
              </div>
            </div>
            <div className="news-1">
              <div className="info1">
                <Image src="/images/icons/date.svg" alt="date" className="date-icon" width={16} height={16} />
                <span className="date">03.09.2025</span>
                <Image src="/images/icons/views.svg" alt="views" className="views-icon" width={16} height={16} />
                <span className="views">2506</span>
              </div>
              <h1 className="news-title">
                It&apos;s official: &quot;Attack on Titan&quot; will get a feature film in 2026!
              </h1>
              <p className="news-text">
                After the end of the main series, fans do not say goodbye to the titans! Studio MAPPA has confirmed the work
                on the film, which will reveal the unknown pages of Eren&apos;s past and the Marley Empire. The premiere is
                scheduled for autumn 2026.
              </p>
              <div className="info2">
                <Image src="/images/icons/user.svg" alt="user" className="user-icon1" width={16} height={16} />
                <span className="author1">Artics</span>
              </div>
            </div>
            <div className="news-1">
              <div className="info1">
                <Image src="/images/icons/date.svg" alt="date" className="date-icon" width={16} height={16} />
                <span className="date">08.07.2025</span>
                <Image src="/images/icons/views.svg" alt="views" className="views-icon" width={16} height={16} />
                <span className="views">1000</span>
              </div>
              <h1 className="news-title">
                A new anime adaptation of &quot;Bleach: Hell Arc&quot; has been announced!
              </h1>
              <p className="news-text">
                Tite Kubo is back! The story will continue in the &quot;Infernal Arc&quot;, where Ichigo, together with his former
                allies, will face dangers that even Kenpachi was silent about. The first teaser is already available, the
                premiere is winter 2026!
              </p>
              <div className="info2">
                <Image src="/images/icons/user.svg" alt="user" className="user-icon1" width={16} height={16} />
                <span className="author1">ArtCraft</span>
              </div>
            </div>
            <div className="news-1">
              <div className="info1">
                <Image src="/images/icons/date.svg" alt="date" className="date-icon" width={16} height={16} />
                <span className="date">10.05.2025</span>
                <Image src="/images/icons/views.svg" alt="views" className="views-icon" width={16} height={16} />
                <span className="views">1246</span>
              </div>
              <h1 className="news-title">
                &quot;Chainsaw Man&quot; will get a spin-off about the Lord of Darkness
              </h1>
              <p className="news-text">
                Studio MAPPA has officially confirmed the expansion of the franchise. The series will explore the origins of
                one of the world&apos;s most mysterious demons. A dark and stylistically unique work is expected - more details
                in July 2025.
              </p>
              <div className="info2">
                <Image src="/images/icons/user.svg" alt="user" className="user-icon1" width={16} height={16} />
                <span className="author1">biggy</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div className="footer-container-vertical">
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">Abount SANEWS</a></li>
              <li><a href="#">Wikipedia</a></li>
              <li><a href="#">Cookie</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">X</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
