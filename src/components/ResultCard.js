import React from "react";
import { Icon, Item, Divider } from "semantic-ui-react";
import "./ResultCard.css";
import PropTypes from "prop-types";

class ResultCard extends React.Component {
  render() {
    const {
      categories,
      display_phone,
      image_url,
      location,
      name,
      price,
      rating,
      review_count,
      url
    } = this.props.data;
    let stars;
    switch (rating) {
      default:
        stars = "../assets/img/yelp_stars/0-stars.png";
        break;
      case 0:
        stars = "../assets/img/yelp_stars/0-stars.png";
        break;
      case 1:
        stars = "../assets/img/yelp_stars/1-stars.png";
        break;
      case 1.5:
        stars = "../assets/img/yelp_stars/1-half-stars.png";
        break;
      case 2:
        stars = "../assets/img/yelp_stars/2-stars.png";
        break;
      case 2.5:
        stars = "../assets/img/yelp_stars/2-half-stars.png";
        break;
      case 3:
        stars = "../assets/img/yelp_stars/3-stars.png";
        break;
      case 3.5:
        stars = "../assets/img/yelp_stars/3-half-stars.png";
        break;
      case 4:
        stars = "../assets/img/yelp_stars/4-stars.png";
        break;
      case 4.5:
        stars = "../assets/img/yelp_stars/4-half-stars.png";
        break;
      case 5:
        stars = "../assets/img/yelp_stars/5-stars.png";
        break;
    }
    return (
      <Item.Group>
        <Divider className="card__divider" />
        <Item>
          <a
            className="card__featured--img"
            style={{ backgroundImage: `url(${image_url})` }}
            as="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          />

          <Item.Content className="card__content">
            <div className="card__main">
              <div className="card__stats--main">
                <Item.Header className="card__header">
                  <span className="card__number">
                    {this.props.results.indexOf(this.props.data) + 1}.
                  </span>
                  <a
                    href={url}
                    className="card__header--title"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </Item.Header>
                <Item.Extra className="card__rating">
                  <img
                    src={stars}
                    alt="Yelp star rating"
                    className="card__rating--stars"
                  />
                  &nbsp; {review_count} reviews
                </Item.Extra>
                <Item.Description>
                  {price} <span className="card__icon--bullet">&bull;</span>{" "}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {categories[0].title}
                  </a>
                </Item.Description>
              </div>
              <div className="card__stats--contact">
                <Item.Extra className="card__stats--contact-wrapper">
                  <a
                    href={url}
                    className="card__icon--info-wrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="info circle" className="card__icon--info" />
                  </a>
                </Item.Extra>
                <Item.Description>{display_phone}</Item.Description>
                <Item.Description>
                  {location.display_address[0]}
                  <br />
                  {location.display_address[1]}
                </Item.Description>
              </div>
            </div>
            <Item.Description className="card__read-reviews">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Read reviews &nbsp;>
              </a>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

ResultCard.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.array,
    display_phone: PropTypes.string,
    image_url: PropTypes.string,
    location: PropTypes.object,
    price: PropTypes.string,
    rating: PropTypes.number,
    review_count: PropTypes.number,
    url: PropTypes.string
  })
};

export default ResultCard;

// image_url,
// location,
// name,
// price,
// rating,
// review_count,
// url
