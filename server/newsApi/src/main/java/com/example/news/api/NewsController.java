package com.example.news.api;


import com.example.news.model.News;
import com.example.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@RequestMapping("api/v1/news")
@RestController
public class NewsController {
    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping()
    public List<News> GetAllNews() {
        return newsService.GetAllNews();
    }

    @GetMapping(path = "{id}")
    public News GetSpecificNews(@PathVariable("id") UUID id) throws NoSuchElementException {
        return newsService.GetSpecificNews(id);
    }

    @PostMapping(path = "add")
    public News AddNews(@RequestBody News inputNews) throws Exception {
        var newNews = newsService.CreateNews(inputNews.getTitle(), inputNews.getContent());
        return newNews;
    }
}
