import React from 'react'

const ContactForm = () => {
  return (
    <div className="mt-[120px] w-full h-[73vh] px-8 mb-36 md:mb-14">
      <div className="bg-Jungle rounded-xl px-10 pt-7 pb-10 border">
        <h1 className="text-2xl font-bold text-center pb-4 text-Beige">
          Contact Us!
        </h1>
        <form className="max-w-[600px] m-auto">
          <div className="hidden md:grid grid-cols-2 gap-2">
            <input
              className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 focus:outline-none text-Terracotta caret-inherit"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 focus:outline-none text-Terracotta caret-inherit"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 md:hidden">
            <input
              className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 focus:outline-none text-Terracotta caret-inherit"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 focus:outline-none text-Terracotta caret-inherit"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 focus:outline-none text-Terracotta caret-inherit w-full my-4"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 focus:outline-none text-Terracotta caret-inherit w-full"
            cols={30}
            rows={6}
            placeholder="Message"
          ></textarea>
          <div className="w-full flex flex-col justify-center items-center">
            <button className="w-[90%] my-2 py-3 px-7">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
