import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <section className="bg-blue-950 h-screen pt-24">
      <div className="text-center pb-10">
          <h2 className="font-bold text-red-800">Mes projets</h2>
      </div>
      <div className="px-44">
          <div className="flex bg-indigo-950 shadow-md mb-10">
              <div className="lesfonds">
                  <Image src='/7367536_3646961.svg' width={300} height={400} className="object-cover w-full h-full" alt='illustration du projet'/>
              </div>
              <div className="px-10 pt-5">
                  <h2 className="font-bold text-red-800 mb-2">Titre du projet</h2>
                  <p className="text-white">
                      Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia laudantium autem ex iusto quibusdam maxime quae, officiis dolores blanditiis. Nulla, aperiam. Assumenda porro illum officiis itaque commodi fugiat voluptatum?
                  </p>
              </div>
          </div>
          <div className="flex bg-indigo-950 shadow-md">
              <div className="lesfonds">
                  <Image src='/hp-docs.svg' width={450} height={550} className="object-cover w-full h-full" alt='illustration du projet'/>
              </div>
              <div className="px-10 pt-5">
                  <h2 className="font-bold text-red-800 mb-2">Titre du projet</h2>
                  <p className="text-white">
                      Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia laudantium autem ex iusto quibusdam maxime quae, officiis dolores blanditiis. Nulla, aperiam. Assumenda porro illum officiis itaque commodi fugiat voluptatum?
                  </p>
              </div>
          </div>
      </div>
    </section>
  )
}