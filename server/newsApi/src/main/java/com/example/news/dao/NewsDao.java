package com.example.news.dao;

import com.example.news.model.News;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface NewsDao {
    Optional<News> GetSpecificNews(UUID newsId);
    List<News> GetAllNews();

    boolean CreateNews(UUID id, String title, String content);

    boolean UpdateNews(News newNewsObject);
}
