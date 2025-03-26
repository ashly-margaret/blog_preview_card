import React from "react";
import "./Card.scss";
import illustrationarticle from "../../assets/assets/images/illustration-article.svg";
import imageAvatar from "../../assets/assets/images/image-avatar.webp"

function Card() {
  return (
    <div class="card">
      <div class="pricing-block-content">
        <img src={illustrationarticle} alt="illustrationarticle" />
        <div className="tag">Learning</div>
        <div className="publishedDate">Published 21 Dec 2023</div>
        <div className="title">HTML & CSS foundations</div>
        <div className="description">
            These languages are the backbone of every website,defining structure,content,and presenation
       </div>
       <div className="authorDetails">
        <img src={imageAvatar} alt="imageAvatar"  className="imageAvatar"/>
        <div className="autherName">Greg Hooper</div>
       </div>
      </div>
    </div>
  );
}

export default Card;
