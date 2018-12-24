import React from "react";
import { Icon, Image, Item, Divider } from "semantic-ui-react";
import "./ResultCard.css";

class ResultCard extends React.Component {
  render() {
    return (
      <Item.Group>
        <Divider className="card__divider" />
        <Item>
          <Item.Image
            size="medium"
            src="https://s3-media3.fl.yelpcdn.com/bphoto/O3vcgcqJhwuCT8DWChdsbQ/348s.jpg"
            className="card__img"
          />

          <Item.Content>
            <div className="card__main">
              <div className="card__stats--main">
                <Item.Header className="card__header">
                  <span className="card__number">1.</span>
                  <span className="card__header--title">
                    Vaso Azzurro Ristorante
                  </span>
                </Item.Header>
                <Item.Extra className="card__rating">
                  <Icon color="yellow" name="favorite" />
                  <Icon color="grey" name="favorite" />
                  <Icon color="grey" name="favorite" />
                  <Icon color="grey" name="favorite" />
                  <Icon color="grey" name="favorite" />
                  1578 reviews
                </Item.Extra>
                <Item.Description>
                  $$ <span className="card__icon--bullet">&bull;</span>{" "}
                  <a href="#">Italian</a>
                </Item.Description>
              </div>
              <div className="card__stats--contact">
                <Item.Extra className="card__stats--contact-wrapper">
                  <Icon name="info circle" className="card__icon--info" />
                </Item.Extra>
                <Item.Description>(650) 940-1717</Item.Description>
                <Item.Description>108 Castro St</Item.Description>
              </div>
            </div>
            <Item.Description>
              “I rarely write reviews, but when credit is due, I only feel that
              I should share with the rest of the yelp readers! I work in the
              hospitality…” <a href="#">read more</a>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
export default ResultCard;
