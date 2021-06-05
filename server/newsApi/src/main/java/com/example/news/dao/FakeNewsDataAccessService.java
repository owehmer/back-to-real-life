package com.example.news.dao;

import com.example.news.model.News;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class FakeNewsDataAccessService implements NewsDao {
    private final List<News> allNews = new ArrayList<News>();

    @Override
    public Optional<News> GetSpecificNews(UUID newsId) {
        return allNews.stream()
                .filter(n -> n.getId().equals(newsId))
                .findFirst();
    }

    @Override
    public List<News> GetAllNews() {
        return allNews;
    }

    @Override
    public boolean CreateNews(UUID id, String title, String content) {
        var newNews = new News(id, title, content);
        allNews.add(newNews);

        return true;
    }

    @Override
    public boolean UpdateNews(News newNewsObject) {
        var currentNewsObj = allNews.stream().filter(news -> news.getId() == newNewsObject.getId()).findFirst();

        if (currentNewsObj.isEmpty()) {
            return false;
        }

        allNews.remove(currentNewsObj);
        allNews.add(newNewsObject);

        return true;
    }
}
