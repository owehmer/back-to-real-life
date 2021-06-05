package com.example.news.service;

import com.example.news.dao.NewsDao;
import com.example.news.model.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
public class NewsService {
    private final NewsDao newsDao;

    @Autowired
    public NewsService(NewsDao newsDao) {
        this.newsDao = newsDao;
    }

    public News GetSpecificNews(UUID newsId) throws NoSuchElementException {
        var news = newsDao.GetSpecificNews(newsId).orElseThrow();
        return news;
    }

    public List<News> GetAllNews() {
        return newsDao.GetAllNews();
    }

    public News CreateNews(String title, String content) throws Exception {
        var uuid = UUID.randomUUID();
        var didCreate = newsDao.CreateNews(uuid, title, content);

        if (!didCreate) {
            throw new Exception("News could not be created!");
        }

        var news = newsDao.GetSpecificNews(uuid).orElseThrow();

        return news;

    }

    public News UpdateNews(News newNewsObject) throws Exception {
        var didUpdate = newsDao.UpdateNews(newNewsObject);

        if (!didUpdate) {
            throw new Exception("News could not be updated!");
        }

        var news = newsDao.GetSpecificNews(newNewsObject.getId()).orElseThrow();
        return news;
    }
}
