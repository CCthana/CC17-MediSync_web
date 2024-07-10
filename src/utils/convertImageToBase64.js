// export const convertImageToBase64 = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.blob())
//       .then(blob => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.onerror = reject;
//         reader.readAsDataURL(blob);
//       })
//       .catch(reject);
//   });
// };

export const convertImageToBase64 = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = (error) => reject(error);
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
};