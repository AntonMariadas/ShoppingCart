import Produit from "./Produit"
import { useState } from "react";
import './App.css';


function App() {
  const produits = [
    { id: 1, marque: "Adidas", modele: "Gazelle", image: "./gazelle.jpg", prix: 80 },
    { id: 2, marque: "Puma", modele: "Future Rider", image: "./puma.jpg", prix: 60 }
  ]

  const [panier, setPanier] = useState([])

  const [somme, setSomme] = useState(0)


  const ajouterAuPanier = (produit) => {
    setPanier([...panier, { ...produit }])
    setSomme(somme + produit.prix)
  }

  const supprimerDuPanier = (index, article) => {
    // J'utilise index et non id pour permettre à mon panier de contenir plusieurs fois le même produit
    // --> Obligation d'avoir une key unique sur une liste
    panier.splice(index, 1)
    setPanier([...panier])
    const { prix } = article
    setSomme(somme - prix)
  }


  return (
    <div className="App">
      <h1>{`Vous avez ${panier.length} article${panier.length > 1 ? 's' : ''} dans votre panier !`}</h1>
      <h1>{`Prix total : ${somme}€`}</h1>

      <section style={{ display: "flex" }}>
        {produits.map(produit => (
          <Produit
            key={produit.id}
            marque={produit.marque}
            modele={produit.modele}
            image={produit.image}
            prix={produit.prix}
            children="Ajouter au panier"
            action={() => ajouterAuPanier(produit)}
          />
        ))}
      </section>


      <hr />


      {panier.map((article, index) => {
        return (

          <Produit
            key={index}
            marque={article.marque}
            modele={article.modele}
            image={article.image}
            prix={article.prix}
            children="Supprimer du panier"
            action={() => supprimerDuPanier(index, article)}
          />
        )
      })}


    </div>
  );
}

export default App;
