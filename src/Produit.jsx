import React from "react";

const Produit = ({ marque, modele, image, prix, action, children }) => {
    // PROBLEME RENCONTRE :
    // => Il me faut un useState panier commun pour tous mes produits
    // => Je dois utiliser useState panier sur App.js

    return (
        <div style={{ border: "2px solid blue", maxWidth: "30%" }}>
            <h3>{marque}</h3>
            <h3>{modele}</h3>
            <img src={image} alt={`${marque} - ${modele}`} />
            <h3>{prix}€</h3>
            <button
                style={{
                    padding: "4px",
                }}
                onClick={action}
            >
                {children}
            </button>
        </div>
    );
};

export default Produit;
