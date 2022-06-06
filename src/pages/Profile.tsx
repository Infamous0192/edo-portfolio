const Profile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl text-center text-opacity-70 font-bold">
          HELLO!
        </h1>
      </div>
      <section className="mb-36">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src="/img/profile.png" alt="" />
          </div>
          <div className="text-center lg:px-14 flex flex-col justify-center">
            <p className="text-3xl mb-2">Muhammad Ridha Setiadi</p>
            <div className="text-xs mb-6">
              <p>Graphic Designer</p>
              <p>Photographer & Videographer</p>
            </div>
            <p>
              My name is Muhammad Ridla Setiadi, people know me as Edo. Born in
              Keidiri, East Java. Now i live in Banjarmasin. I'm a collage
              student of BINUS University, majoring Visual Communication Design
              with excellent skills in communication, leadership and team-work.
              I am very interested in projects realted to design, photos and
              videos.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-36 text-center relative py-6 md:py-12 overflow-hidden md:px-8">
        <h2 className="text-4xl font-bold text-white text-opacity-70 mb-12">MY EDUCATION</h2>
        <div className="font-medium mb-12">
          <div className="text-white text-opacity-40 text-sm mb-1">Senior High School</div>
          <h3 className="text-xl">MAN 2 Model Banjarmasin</h3>
          <div className="text-lg">2016 - 2019</div>
        </div>
        <div className="font-medium">
          <div className="text-white text-opacity-40 text-sm mb-1">University</div>
          <h3 className="text-xl">Bina Nusantara University</h3>
          <div className="text-lg">2019 - 2023</div>
        </div>
        <div className="text-white text-opacity-5 text-5xl md:text-8xl absolute font-bold bottom-0 left-0">EDUCATION</div>
      </section>

      <section className="mb-36 relative py-6 md:py-12 overflow-hidden md:px-8">
        <h2 className="text-4xl font-bold text-white text-opacity-70 mb-12 text-center">ORGANIZATION EXPERIENCE</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="font-medium mb-1">
            <div className="text-white text-opacity-40">Chairman of MPK</div>
            <div className="text-xl">Majelis Permusyawaratan Kelas</div>
            <div className="text-lg">2017 - 2018</div>
          </div>
          <div className="font-medium mb-1">
            <div className="text-white text-opacity-40">Creative Staff of Artocity</div>
            <div className="text-xl">Artocity</div>
            <div className="text-lg">2019</div>
          </div>
          <div className="font-medium mb-1">
            <div className="text-white text-opacity-40">Documentation Member</div>
            <div className="text-xl">BINUS TV</div>
            <div className="text-lg">2019</div>
          </div>
          <div className="font-medium mb-1">
            <div className="text-white text-opacity-40">Member of Entrepreneurship Division</div>
            <div className="text-xl">VISCODE Binus Malang</div>
            <div className="text-lg">2019 - 2020</div>
          </div>
          <div className="font-medium mb-1">
            <div className="text-white text-opacity-40">Freshmen Partner</div>
            <div className="text-xl">First Year Program</div>
            <div className="text-lg">2020 - 2021</div>
          </div>
        </div>
        <div className="text-white text-opacity-5 text-5xl md:text-8xl absolute font-bold bottom-0 left-0">EXPERIENCE</div>
      </section>

      <section className="mb-36 relative py-6 md:py-12 overflow-hidden md:px-8">
        <h2 className="text-4xl font-bold text-white text-opacity-70 mb-12 text-center">SKILL</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
          <div className="font-medium">
            <div className="mb-8">
              <h3 className="text-2xl">Graphic Design</h3>
              <div className="text-white text-opacity-40">Capable of using</div>
            </div>
            <ul className="font-light space-y-1">
              <li>Adobe <span className="font-medium">Photoshop</span></li>
              <li>Adobe <span className="font-medium">Illustrator</span></li>
              <li>Adobe <span className="font-medium">InDesign</span></li>
              <li>Adobe <span className="font-medium">Lightroom</span></li>
            </ul>
          </div>
          <div className="font-medium">
            <div className="mb-8">
              <h3 className="text-2xl">Video Editing</h3>
              <div className="text-white text-opacity-40">Capable of using</div>
            </div>
            <ul className="font-light space-y-1">
              <li>Adobe <span className="font-medium">Primiere Pro</span></li>
              <li>Adobe <span className="font-medium">After Effect</span></li>
            </ul>
          </div>
          <div className="font-medium">
            <div className="mb-8">
              <h3 className="text-2xl">3D Modelling</h3>
              <div className="text-white text-opacity-40">Capable of using</div>
            </div>
            <ul className="font-light space-y-1">
              <li>Adobe <span className="font-medium">Dimension</span></li>
              <li><span className="font-medium">Blender</span></li>
            </ul>
          </div>
        </div>
        <div className="text-white text-opacity-5 text-5xl md:text-8xl absolute font-bold bottom-0 left-0">SKILL</div>
      </section>
    </div>
  )
}

export default Profile
