export const PageContent = (): JSX.Element => {
  return (
    <div className="pt-10 pb-4 px-4 sm:px-6 lg:px-8">
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        React + Typescript + Next Practice
      </p>
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Lazy Image Component
      </h3>
      <div className="max-w-xl mx-auto text-xl text-gray-500 leading-7">
        <p className="mt-4">
          <a target="_blank" href="https://randomfox.ca/" className="text-indigo-600">Using Random Fox API</a> to generate a random cute fox, working with <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading" className="text-indigo-600">lazy loading</a>
        </p>
        <p className="mt-4">✨✨</p>
      </div>
    </div>
  );
}