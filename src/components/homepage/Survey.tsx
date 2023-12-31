export default function SurveySection() {
  return (
    <div className="bg-background dark:bg-slate-700 text-slate-900 dark:text-slate-200 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
            Top trusted transportation service in country!
          </h2>
          <p className="mt-3 text-xl text-gray-500  sm:mt-4">
            From individuals to businesses, and stakeholders to clients, our
            service caters to a broad spectrum of users who have discovered the
            value we offer.
          </p>
        </div>
      </div>
      <div className="mt-10 bg-background dark:bg-slate-700 text-slate-900 dark:text-slate-200 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 " />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg  shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 dark:border-slate-600/20 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-300">
                    Companies
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary dark:text-indigo-400">
                    75.9K
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 dark:border-slate-600/20 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-300">
                    Stakeholders
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary dark:text-indigo-400">
                    24.5K
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-slate-600/20 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-300">
                    Customers
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary dark:text-indigo-400">
                    10.4M
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
