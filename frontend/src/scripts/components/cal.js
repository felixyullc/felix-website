// const catchUp = (C, A, L) => {
//   let p = function (a, ar) {
//     a.q.push(ar);
//   };
//   let d = C.document;
//   C.Cal =
//     C.Cal ||
//     function () {
//       let cal = C.Cal;
//       let ar = arguments;
//       if (!cal.loaded) {
//         cal.ns = {};
//         cal.q = cal.q || [];
//         d.head.appendChild(d.createElement("script")).src = A;
//         cal.loaded = true;
//       }
//       if (ar[0] === L) {
//         const api = function () {
//           p(api, arguments);
//         };
//         const namespace = ar[1];
//         api.q = api.q || [];
//         if (typeof namespace === "string") {
//           cal.ns[namespace] = cal.ns[namespace] || api;
//           p(cal.ns[namespace], ar);
//           p(cal, ["initNamespace", namespace]);
//         } else {
//           p(cal, ar);
//         }
//         return;
//       }
//       p(cal, ar);
//     };
// };

// cal(window, "https://app.cal.eu/embed/embed.js", "init");

// Cal("init", "catch-up", {
//   origin: "https://app.cal.eu",
// });

// Cal.ns["catch-up"]("ui", {
//   hideEventTypeDetails: false,
//   layout: "month_view",
// });

// export { catchUp };

(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };

  let d = C.document;

  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }

      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };

        const namespace = ar[1];

        api.q = api.q || [];

        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }

        return;
      }

      p(cal, ar);
    };
})(window, "https://app.cal.eu/embed/embed.js", "init");

function initCal(namespace) {
  Cal("init", namespace, {
    origin: "https://app.cal.eu",
  });

  Cal.ns[namespace]("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
  });
}

export {initCal}