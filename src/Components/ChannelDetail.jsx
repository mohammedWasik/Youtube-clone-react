import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(result?.items[0]);
      const resultFromChannel = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(resultFromChannel?.items);
    })();
  }, [id]);
  return (
    <Box minHeight={"100vh"}>
      <Box>
        <div
          style={{
            height: "300px",
            background: `linear-gradient(90deg, hsla(159, 35%, 45%, 1) 0%, hsla(176, 68%, 12%, 1) 100%)`,
            zIndex: 10,
          }}
        />
        <ChannelCard ChannelDetail={ChannelDetail} marginTop={"-120px"} />
      </Box>
      <Box p={2} display="flex">
        <Box
          sx={{
            mr: { sm: "100px" },
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
