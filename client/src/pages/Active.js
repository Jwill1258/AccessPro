import React, { useState, Component } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "../components/YoutubeSearch";
import { Col, Row, Container } from "../components/Grid";


import youtube from "../utils/api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Container>
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyARSPCn98qSB-fAzAdkuOLZUPM3jy7PcDo",
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}
