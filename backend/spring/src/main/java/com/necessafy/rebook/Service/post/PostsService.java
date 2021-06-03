package com.necessafy.rebook.Service.post;


import com.necessafy.rebook.dao.post.PostDao;
import com.necessafy.rebook.model.post.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostsService {
    private final PostDao postDao;

    @Transactional
    public Long save(PostsSaveRequest requestDto) {
        return postDao.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, PostsUpdateRequest requestDto) {
        Posts posts = postDao.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));

        posts.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    @Transactional
    public void delete (Long id) {
        Posts posts = postDao.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));

        postDao.delete(posts);
    }

    @Transactional(readOnly = true)
    public PostsResponse findById(Long id) {
        Posts entity = postDao.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));

        return new PostsResponse(entity);
    }

    @Transactional(readOnly = true)
    public List<PostsListResponse> findAllDesc() {
        return postDao.findAllDesc().stream()
                .map(PostsListResponse::new)
                .collect(Collectors.toList());
    }
}
