import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlannersInfo } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { NavLink } from "react-router-dom";

//

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    margin: "0 auto",
    paddingTop: "10%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    margin: " 0 auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export const SingleInfo = props => {
  const back = "\u23CE";
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const plannersInfo = useSelector(state => state.plannersInfo);
  const loading = useSelector(state => state.loading);
  useEffect(() => {
    dispatch(PlannersInfo(`/api/planners/${id}`));
  }, [loading]);

  console.log(plannersInfo);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div>
        <NavLink to="/Home">
          <span style={{ fontSize: "4rem" }}>{back}</span>
        </NavLink>
      </div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="be our guest"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {loading ? (
              <div style={{ color: "red" }}>Fetching their info..</div>
            ) : (
              <h3>
                Company:{" "}
                <span style={{ color: "green" }}>
                  {plannersInfo.planner.username}
                </span>
              </h3>
            )}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {loading ? (
                <div>getting their info..</div>
              ) : (
                <h5>
                  <span style={{ color: "green" }}>
                    {plannersInfo.planner.username}
                  </span>{" "}
                  clients and recent work:
                </h5>
              )}
            </Typography>

            {!loading &&
              plannersInfo.weddings.map(job => (
                <>
                  <CardMedia key={job.id} image={job.wedding_photo} />

                  <Typography paragraph>
                    {" "}
                    weding name:{" "}
                    <span style={{ color: "green" }}>{job.wedding_name}</span>
                  </Typography>
                  <Typography paragraph>
                    wedding location:{" "}
                    <span style={{ color: "green" }}>
                      {job.wedding_location}
                    </span>
                  </Typography>
                  <Typography paragraph>
                    wedding theme:{" "}
                    <span style={{ color: "green" }}>{job.theme}</span>
                  </Typography>
                  <Typography paragraph>
                    wedding description:{" "}
                    <span style={{ color: "green" }}>{job.description}</span>
                  </Typography>
                </>
              ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
