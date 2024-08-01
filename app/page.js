import Image from "next/image";

export default function Home() {
  return (
    <section id="accueil" className="flex bg-blue-950 h-screen pt-24">
      <div className="flex-1">
        <div className="pl-36 pt-12">
          <div>
            <h2 className="text-3xl text-white font-bold mb-5">
              Bonjour,<br/>
              Je suis Perrin Emmanuel <span className="text-red-800">NZAOU</span>,<br/>
              Développeur <span className="text-red-800">Full-Stack</span> 
            </h2>
            <p className="text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis laborum, minus fugit delectus repellendus error eveniet sint id recusandae ipsa iusto illum, incidunt, maxime ducimus tenetur. Tenetur, rerum omnis?
            </p>
          </div>
          <div>
            <a href="#contacter" className="transition text-white inline-block p-2 bg-red-800 hover:bg-red-950">Me contacter</a>
          </div>
        </div>
      </div>
      <div className="flex-1 relative pt-6 pl-20">
        <Image src='/IMG_3255.jpg' width={302} height={403} alt="ma photo"/>
      </div>
    </section>
  );
}
