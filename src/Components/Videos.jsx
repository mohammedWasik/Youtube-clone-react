import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={{ direction } || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}>
      {videos?.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard ChannelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
