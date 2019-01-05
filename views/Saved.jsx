const React = require('react')

const Saved = props =>
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Mongo Scraper</title>
      <link rel="stylesheet" href="./css/reset.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Playfair+Display" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
      <link rel="stylesheet" href="./css/style.css" />
    </head>
    <body>
      <div className="parallax1">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Mongo Scraper</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><button className="btn">
              <a id='goToHome' href="#">Home <span className="sr-only">(current)</span></a></button></li>
            <li className="nav-item"><button className="btn">
              <a id='goToSaved' href="#">Saved Articles</a></button></li>
          </ul>
        </div>
      </nav>
          <div className="row titlePic">
            <h1>Mongo Scraper</h1>
          </div>
          <div className="row subHeader">
            <h4>Saved Articles</h4>
          </div>
        </div>
        {
          props.stacks.map(stack => (
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src={stack.image} alt="article-image" />
                <div class="card-body">
                  <a href={stack.url} class="card-title">{stack.headline}</a>
                  <p class="card-text">{stack.summary}</p>
                <a href="#" id='deleteBTN' data-id={stack._id}><button className="deleteBtn">Delete</button></a>
                </div>
                </div>
              ))
            }
      <footer>
      <div className="footer text-center">
        <a href='https://www.nytimes.com/' target="_blank" className="footerLink">New York Times</a>
      </div>
  </footer>
            <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossOrigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
            <script src="./js/app.js"></script>
    </body>
  </html>

      module.exports = Saved