package com.example.news.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class News {
    private UUID Id;

    private String Title;

    private String Content;

    public News(
            @JsonProperty("id") UUID id,
            @JsonProperty("title") String title,
            @JsonProperty("content") String content
    ) {
        Id = id;
        Title = title;
        Content = content;
    }

    public UUID getId() {
        return Id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }
}
