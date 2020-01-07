function domainName(url) {
  //your code here

  if (url.includes("http://") || url.includes("https://")) {
    const arr = url.split("//")[1];

    if (arr.includes("www.")) {
      const another = arr.split("www.")[1].split(".com")[0];

      return another.includes(".") ? another.split(".")[0] : another;
    } else if (arr.includes(".com")) {
      return arr.split(".com")[0];
    } else {
      return arr.split(".")[0];
    }
  } else if (url.includes("www.")) {
    const newArr = url.split("www.")[1].split(".com")[0];
    return newArr.includes(".") ? newArr.split(".")[0] : newArr;
  } else if (url.includes(".com")) {
    return url.split(".com")[0];
  } else {
    return url.split("/")[0].split(".")[0];
  }
}
// domainName("https://youtube.com");
domainName("n0g-2zhdqv.name/warez/");
// domainName("http://github.com/carbonfive/raygun");
// sdomainName("http://www.zombie-bites.com");
// domainName("https://www.cnet.com") == "cnet"
