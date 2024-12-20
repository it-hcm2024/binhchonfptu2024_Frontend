import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import ShareIcon from "@mui/icons-material/Share";
import Iconify from "assets/theme/components/icon/Iconify";
import Favorite from "@mui/icons-material/Favorite";

const getIcon = (name) => <Iconify icon={name} width={40} height={40} />;
export default function CardTop3(props) {
  const {
    name,
    image,
    description,
    score,
    onClickUnVote,
    onClickVote,
    onClickShare,
    handleClick,
    groupName,
    id,
    isVoted,
  } = props;

  return (
    <>
      <Card
        id={id}
        variant="outlined"
        sx={{ width: 250, bottom: "-15%", borderWidth: "4px", borderColor: "#B87333" }}
      >
        <CardOverflow>
          <AspectRatio ratio="1">
            <img
              style={{ display: "over", objectFit: "cover" }}
              src={image}
              srcSet={image}
              loading="lazy"
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://res.cloudinary.com/ddrq4bfkk/image/upload/f_auto,q_auto/v1/2024/pg5l7ve7r98mlaffpkuu";
                alt = "";
              }}
            />
          </AspectRatio>

          {isVoted ? (
            <IconButton
              aria-label="Like minimal photography"
              size="md"
              variant="solid"
              color="success"
              onClick={onClickUnVote}
              sx={{
                backgroundColor: "#B87333",
                "&:hover": {
                  backgroundColor: "#B87333",
                },
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "4rem",
                bottom: 0,
                transform: "translateY(50%)",
              }}
            >
              <HowToVoteIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Like minimal photography"
              size="md"
              variant="solid"
              color="success"
              onClick={onClickVote}
              sx={{
                backgroundColor: "#B87333",
                "&:hover": {
                  backgroundColor: "#B87333",
                },
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "3rem",
                bottom: 0,
                transform: "translateY(-650%)",
              }}
            >
              #3
            </IconButton>
          )}

          {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="success"
          onClick={onClickLike}
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <Favorite />
        </IconButton> */}
        </CardOverflow>
        <CardContent>
          <Typography
            level="h2"
            fontSize="md"
            sx={{
              color: "#B83490",
            }}
          >
            <Link onClick={handleClick} overlay underline="none" color="#B83490">
              {name}
            </Link>
          </Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body3" sx={{ fontWeight: "md", color: "#B83490" }}>
              {
                <IconButton info>
                  <Favorite sx={{ color: "#D44FAC" }} /> {score}
                </IconButton>
              }
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
}
