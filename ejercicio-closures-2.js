function prefijo(prefijo){
  return function makePrefixer(sufijo) {
    console.log(`${prefijo + sufijo}`)
  }
}

const prefijoRe = prefijo("Re")
const prefijoIn = prefijo("In")


prefijoRe("malo")
prefijoRe("bueno")
prefijoIn("creible")
