function changePageTitle(title) {
    document.title = title
  }
  
  function generateInfoSection(sprites ,estadonome) {
  
    const sectionk = document.createElement('sectionk')
    sectionk.id = "info-pokemon-label"
    sectionk.textContent = ` ${estadonome}`
  
    const img = document.querySelector('img')
    img.src = imagens[0]
    img.alt = `Imagem do pokemon ${estadonome}`
  
    const section = document.querySelector('#info-estado')
    
    section.appendChild(sectionk)

  }
  
  
  async function getEstadoData(nome) {
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados${nome}`)
  
      const jsonData = await data.json()
  
      generateInfoSection(nome)
    } catch (error) {
      console.error(error)
    }
  }
  
  function getSearchParams() {
    if (!location.search) {
      return
    }
  
    const urlSearchParams = new URLSearchParams(location.search)
  
    const estadonome = urlSearchParams.get('nome')
  
    changePageTitle(`Pagina do ${estadonome}`)
    getEstadoData(estadonome)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
  })