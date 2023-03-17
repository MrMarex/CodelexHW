<template>
  <main>
    <div class="home__wrapper">
      <h1 class="home__heading">Welcome!</h1>
      <div class="home__video-section">
        <div class="video-section__paragraph">
          <h2 class="paragraph__heading">Long story short...</h2>
          <p class="paragpraph__text">
            This was supposed to be the guitar player App but I did not manage to make it, so I will play it by myself.
            <br>
            And final result of musical instrument You can explore in the second page of this App.
          </p>
        </div>
        <div class="video-section__videos">
          <div class="videos__video">
            <iframe width="375" height="215" src="https://www.youtube.com/embed/z8YLmszk8Zg" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
            <div class="video__title">
              <span>Prelude.</span>
            </div>
          </div>
          <div class="videos__video">
            <iframe width="375" height="215" src="https://www.youtube.com/embed/Z5ZlTuzpFoI" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
            <div class="video__title">
              <span>Improvisation with tabs.</span>
            </div>
          </div>
          <div class="videos__video">
            <iframe width="375" height="215" src="https://www.youtube.com/embed/iEgnbM83ox4" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
            <div class="video__title">12 bar blues.</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif+Lao:wght@500&display=swap');

.home__wrapper {
  font-family: 'Noto Serif Lao', serif;
}

.home__heading {
  font-family: 'Bebas Neue', cursive;
  font-size: 70px;
}

.paragraph__heading {
  font-size: 30px;
}

.paragpraph__text {
  font-size: 20px;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 10px;
}

.video-section__videos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.videos__video {
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid white;
  background-color: black;
  box-shadow: 0 0 40px 10px white;
}

.video__title {
  font-family: 'Bebas Neue', cursive;
  text-align: center;
  font-size: 40px;
}
</style>