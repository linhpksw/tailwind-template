# tailwind-template

## **1. Resource:**

- Official document: [Tailwind CSS](https://tailwindcss.com "‌"). Nơi tra cứu đầy đủ nhất mọi thứ.
- Tailwind UI: [Tailwind UI](https://tailwindui.com/ "‌") . Nơi chứa các design có sẵn siêu đẹp từ TW. Mình đã lấy được 500+ component có trả phí tại repo của mình. [https://github.com/linhpksw/tailwind-ui](https://github.com/linhpksw/tailwind-ui "smartCard-inline")
- Một trang build sẵn component từ TW khá đẹp [https://flowbite.com/](https://flowbite.com/ "‌")
- Animation với Tailwind: [Xtend UI](https://xtendui.com/ "‌")
- TW UI tiếp: [daisyUI](https://daisyui.com/ "‌")
- Và còn rất nhiều từ [https://github.com/aniftyco/awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss "smartCard-inline") , mn có thể tham khảo thêm nhé!
- Về video thì có kênh youtube chính thức của TW: [https://www.youtube.com/@TailwindLabs](https://www.youtube.com/@TailwindLabs "smartCard-inline")  Mình học được kha khá điều từ đây. Tra docs có gì khó lại xem video là hiểu liền.
- Video tutorial tiếng việt bởi a Evondev: [https://www.youtube.com/watch?v=-VQhSM77_HA&list=PLd8OdiciAE1TkDTHIytrVT5Eamgseh9LU](https://www.youtube.com/watch?v=-VQhSM77_HA&list=PLd8OdiciAE1TkDTHIytrVT5Eamgseh9LU "smartCard-inline")

## **2. Install Node JS**

- Vào [https://nodejs.org/en/](https://nodejs.org/en/ "smartCard-inline") tải và cài đặt. Node sẽ hỗ trợ chạy các ứng dụng bên dưới.

## **3. Install VS Code:**

- Vào [https://code.visualstudio.com/](https://code.visualstudio.com/ "‌") và cài theo hướng dẫn.
- Những extensions mà mình khuyên mn cài theo để nâng cao hiệu suất code và tạo sự thống nhất
  \>> **Live server, Prettier, Tailwind CSS IntelliSense, vscode-icons, ESLint, Color Highlight, CodeSnap.**

## **4. Set-up Tailwind CSS**

- Các bạn clone template mình đã tạo ở đây [https://github.com/linhpksw/tailwind-template](https://github.com/linhpksw/tailwind-template "smartCard-inline")  để không phải tự config 3 file package.json, postcss.config.js, tailwind.config.js. Nhớ đối chiếu lại với template của mình đã tạo nhé. Nếu sai thì file sẽ không chạy được.
- Đây là toàn bộ lệnh mà mình tổng hợp để mn bắt đầu 1 dự án Tailwind với Vanilla JS (JS thuần). Tất cả lệnh chạy trong Terminal của VS Code.
  ```powershell
  // Khởi tạo dự án Node
  npm init -y

  // Cài đặt các ứng dụng
  // Khởi tạo dự án TW với Vite
  npm i -D tailwindcss postcss autoprefixer vite
  npx tailwindcss init -p

  // Dùng nano để nén code
  npm i -D cssnano

  // Cài thêm plugin hỗ trợ sort class
  npm i -D prettier prettier-plugin-tailwindcss

  // Cài các plugin chính thức từ TW
  npm install -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/line-clamp @tailwindcss/container-queries
  (Sự đỉnh của plugin mình sẽ nói sau ^^)

  // Bắt đầu run code thôi
  // Build từ file tw -> css
  // Với mỗi lệnh bạn mở 1 terminal riêng trong VS Code.
  // Mỗi khi bắt đầu lại dự án chạy 2 lệnh này.

  1: npx tailwindcss-cli build -i css/tailwind.css -o build/tailwind.css
     npx tailwindcss build -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch
  2: npm run dev

  ```
- Xem thành quả:
  \- Đến đây thì các bạn đã thấy xuất hiện 1 form rồi đúng không. Chỉ cần một vài dòng code html mà không cần bất kì dòng CSS hay JS nào mà chúng ta đã code được giao diện đăng nhập như Google và đặc biệt là tính hiệu ứng Floating Label cực kì trendy. Trong tương lai chúng ta sẽ tận dụng nhiều hơn nữa sức mạnh của Tailwind. Cảm ơn các bạn đã đọc bài viết của mình.🥰

‌
