export default function HomePage() {
  return (
    <>
      <header>
        <div className="container">
          <img className="logo" src="/images/logo.svg" alt="logo" />
          <nav>
            <ul className="left-menu">
              <li><a href="#">Main</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">News</a></li>
            </ul>
            <ul className="right-menu">
              <li><a href="#"><img src="/images/icons/scroll.svg" alt="scroll" className="header-icon" /></a></li>
              <li><a href="#"><img src="/images/icons/search.svg" alt="search" className="header-icon" /></a></li>
              <li><a href="#"><img src="/images/icons/settings.svg" alt="settings" className="header-icon" /></a></li>
              <li><a href="#"><img src="/images/icons/profile.svg" alt="profile" className="header-icon" /></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="news-article">
        <div className="news-content">
          <div className="news-meta">
            <img src="/images/icons/user.svg" alt="user" className="user-icon" />
            <span className="author">Sitrix</span>
            <img src="/images/icons/date.svg" alt="date" className="date-icon" />
            <span className="date">08 March 2025</span>
            <img src="/images/icons/views.svg" alt="views" className="views-icon" />
            <span className="views">1245</span>
          </div>

          <h1 className="news-title">
            Its official: The second season of "Solo Leveling" is announced for 2026!
          </h1>
          <img src="/images/banner.png" alt="banner" className="news-image" />
          <p className="news-text">
            Fans of the popular Solo Leveling anime can rejoice: A-1 Pictures has finally announced
            about the start of work on the second season of the series. The announcement was made during a special panel at
            the Anime Expo festival 2025, which featured a short teaser that instantly blew up the web.
            <br /><br />
            The continuation of the story of Song Jin-Woo, a hunter who strives to become the strongest in the
            world, will span an arc "Reds gate" from Jang Sung Raks original manhwa. The director of the first season,
            Shunsuke Nakashige, will return to the project, promising even more dynamic battles and deeper character development.
            The release date is currently set for spring 2026, and streaming will continue to be available on Crunchyroll.
            <br /><br />
            "We are impressed by the support of the fans and want to give a gift them something really epic" - commented
            the representatives of the studio. Meanwhile, the teaser showed a hint of the appearance of new
            powerful enemies and the long-awaited return of favorite heroes. Is Song Jin-Woo ready for new challenges?
            We are waiting looking forward to it!
          </p>
        </div>

        <aside className="sidebar">
          <div className="sidebar-content">
            <h2 className="sidebar-title">Last news</h2>
            <img src="/images/icons/x.svg" alt="x" className="x-icon" />
          </div>

          <div className="news-all">
            {[
              {
                date: "08.05.2025",
                views: 1245,
                title: 'Its official: The second season of "Solo Leveling" is announced for 2026!',
                text: "In a short time, Sakura not only found loyal friends, with whom he would go into fire and water, but also became a captain",
                author: "Sitrix"
              },
              {
                date: "03.09.2025",
                views: 2506,
                title: 'Its official: "Attack on Titan" will get a feature film in 2026!',
                text: "After the end of the main series, fans do not say goodbye to the titans! Studio MAPPA has confirmed the work on the film...",
                author: "Artics"
              },
              {
                date: "08.07.2025",
                views: 1000,
                title: 'A new anime adaptation of "Bleach: Hell Arc" has been announced!',
                text: "Tite Kubo is back! The story will continue in the 'Infernal Arc', where Ichigo, together with his former allies, will face dangers...",
                author: "ArtCraft"
              },
              {
                date: "10.05.2025",
                views: 1246,
                title: '"Chainsaw Man" will get a spin-off about the Lord of Darkness',
                text: "Studio MAPPA has officially confirmed the expansion of the franchise. The series will explore the origins of one of the world's most mysterious demons...",
                author: "biggy"
              }
            ].map((news, index) => (
              <div key={index} className="news-1">
                <div className="info1">
                  <img src="/images/icons/date.svg" alt="date" className="date-icon" />
                  <span className="date">{news.date}</span>
                  <img src="/images/icons/views.svg" alt="views" className="views-icon" />
                  <span className="views">{news.views}</span>
                </div>
                <h1 className="news-title">{news.title}</h1>
                <p className="news-text">{news.text}</p>
                <div className="info2">
                  <img src="/images/icons/user.svg" alt="user" className="user-icon1" />
                  <span className="author1">{news.author}</span>
                </div>
              </div>
            ))}
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
