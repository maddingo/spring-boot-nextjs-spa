module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return {
      // beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        // {
        //   source: '/api/',
        //   destination: 'http://localhost:8080/api/',
        //   has: [{ type: 'query', key: 'overrideMe' }],
        // },
      // ],
      // afterFiles: [
      //   These rewrites are checked after pages/public files
      //   are checked but before dynamic routes
      //   {
        //   source: '/non-existent',
        //   destination: '/somewhere-else',
        // },
      // ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/api/:path*',
          destination: `http://localhost:8080/api/:path*`,
        },
      ],
    }
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:8080/api/:path*',
  //       permanent: false,
  //     },
  //   ]
  // },
};
