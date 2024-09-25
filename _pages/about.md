---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D candidate under supervision of [Prof. Lefei Zhang](https://scholar.google.ch/citations?user=BLKHwNwAAAAJ&hl=en) and [Prof. Bo Du](https://scholar.google.ch/citations?hl=en&user=Shy1gnMAAAAJ) at School of Computer Science, Wuhan University. My research interests include low-level vision for raw images and neural ISP. I was a research intern at [Horizon Robotics](https://www.horizon.cc/). I was also a visiting student in [LV-Lab](http://lv-nus.org/) at NUS, which is founded by [Prof. Shuicheng Yan](https://scholar.google.ch/citations?hl=en&user=DNuiPHwAAAAJ) under supervision of [Prof. Xinchao Wang](https://scholar.google.ch/citations?user=w69Buq0AAAAJ&hl=en).


# 🔥 News
- *2024.09*: &nbsp;🥂 We release a repo regarding with [*All-in-one Image Restoration*](https://github.com/leonmakise/Awesome-All-in-one-Image-Restoration-Methods), please follow and star it. We are awlays updating those recent awesome methods on this arising task. The comprehensive survey on All-in-one Image Restoration is on the way, stay tune with us~
- *2024.08*: &nbsp;✨ Our new paper [*Perceive-IR*](https://arxiv.org/abs/2408.15994) is on ArXiv now (All-in-one Image Restoration).
- *2024.06*: &nbsp;✨ Our new paper [*HyperSIGMA*](https://arxiv.org/abs/2406.11519) is on ArXiv now (The First One Billion Params Remote Sensing Foundation Model!).
- *2023.06*: &nbsp;✨ Our new paper [*ProRes*](https://arxiv.org/abs/2306.13653) is on ArXiv now (Universal/All-in-one Image Restoration).
- *2023.04*: &nbsp;🎉 One paper is accepted by Neural Networks.
- *2022.06*: &nbsp;🎉 One paper is accepted by ACM MM 2022.
- *2021.03*: &nbsp;🎉 One paper is accepted by CVPR 2021.
- *2020.10*: &nbsp;🎉 One paper is accepted by Pattern Recognition.
- *2019.05*: &nbsp;🎉 One paper is accepted by IJCAI 2019.

# 📝 Publications 
Note: * Equal contribution, ^ Corresponding authors.

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review (TIP)</div><img src='images/perceive-ir.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- [Perceive-IR: Learning to Perceive Degradation Better for All-in-One Image Restoration](https://arxiv.org/abs/2408.15994)

Xu Zhang*, **Jiaqi Ma***, Guoli Wang, Qian Zhang, Huan Zhang, Lefei Zhang^.

**Project WIP**

we propose Perceive-IR, an all-in-one image restorer designed to achieve fine-grained quality control that enables restored images to more closely resemble their undistorted counterparts, regardless of the type or severity of degradation. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review (TPAMI)</div><img src='images/perceive-ir.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- [HyperSIGMA: Hyperspectral Intelligence Comprehension Foundation Model](https://arxiv.org/abs/2406.11519)


Di Wang*, Meiqi Hu*, Yao Jin*, Yuchun Miao*, Jiaqi Yang*, Yichu Xu*, Xiaolei Qin*, **Jiaqi Ma***, Lingyu Sun*, Chenxing Li*, Chuan Fu, Hongruixuan Chen, Chengxi Han^, Naoto Yokoya, Jing Zhang^, Minqiang Xu, Lin Liu, Lefei Zhang, Chen Wu^, Bo Du^, Dacheng Tao, Liangpei Zhang^.

[**Project**](https://github.com/WHU-Sigma/HyperSIGMA)


we introduce HyperSIGMA, a vision transformer-based foundation model for HSI interpretation, scalable to over a billion parameters.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review (TIP)</div><img src='images/prores.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- [ProRes: Exploring Degradation-aware Visual Prompt for Universal Image Restoration](https://arxiv.org/abs/2306.13653)

**Jiaqi Ma***, Tianheng Cheng*, Guoli Wang, Qian Zhang, Xinggang Wang, Lefei Zhang^.

[**Project**](https://github.com/leonmakise/ProRes) 

We perform the first attempt to involve visual prompt into image restoration tasks and explore some new findings.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neural Networks</div><img src='images/nn2023.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [Restoration and Enhancement on Low Exposure Raw Images by Joint Demosaicing and Denoising](https://www.sciencedirect.com/science/article/pii/S0893608023001442)

**Jiaqi Ma**, Guoli Wang, Lefei Zhang^, Qian Zhang. 

  
We propose a joint demosaicing and denoising framework for restoring and enhancing low exposure raw images.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2022</div><img src='images/acm mm2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [ELMformer: Efficient Raw Image Restoration with a Locally Multiplicative Transformer](https://dl.acm.org/doi/abs/10.1145/3503161.3547767)
  
**Jiaqi Ma**, Shengyuan Yan, Lefei Zhang^, Guoli Wang, Qian Zhang. 

[**Project**](https://github.com/leonmakise/ELMformer) 
  
We propose an efficient transformer framework for raw image restoration.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2021</div><img src='images/cvpr2021.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [Pseudo Facial Generation with Extreme Poses for Face Recognition](https://openaccess.thecvf.com/content/CVPR2021/papers/Wang_Pseudo_Facial_Generation_With_Extreme_Poses_for_Face_Recognition_CVPR_2021_paper.pdf)
  
Guoli Wang, **Jiaqi Ma**, Qian Zhang, Jiwen Lu^, Jie Zhou. 

[**Project**](https://github.com/leonmakise/PFGEPFR)

We discover the residual in extreme poses and propose a light-weight plug-in for face recognition.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Pattern Recognition</div><img src='images/pr2020.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='show_paper_citations' data='BJUlpoMAAAAJ:u-x6o8ySG0sC'></span>
- [Discriminative subspace matrix factorization for multiview data clustering](https://www.sciencedirect.com/science/article/abs/pii/S0031320320304799)
  
**Jiaqi Ma**, Yipeng Zhang, Lefei Zhang^. 

We extend PSMF to multi-view scenero and discuss the combination of supervised and unsupervised framework.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2019</div><img src='images/ijcai2019.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [Pseudo Supervised Matrix Factorization in Discriminative Subspace](https://www.ijcai.org/Proceedings/2019/0633.pdf)
  
**Jiaqi Ma**, Yipeng Zhang, Lefei Zhang^, Bo Du, Dapeng Tao. 

We discover the relationship between NMF and LDA and propose a pseudo supervised matrix factorization method (PSMF).
</div>
</div>


# 🏆 Honors and Awards
- *2023.10*,  &emsp; China National Scholarship  &emsp; Ministry of Education of the People's Republic of China.
- *2022.06*,  &emsp; CSC(China Scholarship Council) Scholarship &emsp; Ministry of Education of the People's Republic of China.
- *2021.11*,  &emsp; Yisheng Scholarship &emsp; Wuhan University.
- *2021.06*,  &emsp; Outstanding Postgraduate  &emsp; Wuhan University.
- *2019.11*,  &emsp; China National Scholarship  &emsp; Ministry of Education of the People's Republic of China.
- *2019.11*,  &emsp; First-Class Outstanding Scholarship for Postgraduate  &emsp; Wuhan University.

# 📖 Educations
- *2021.09 - now*, Ph.D. student in Computer Science.
&emsp; School of Computer Science, Wuhan University.


- *2018.09 - 2021.06*, Master in Computer Science.
&emsp; School of Computer Science, Wuhan University.

- *2014.09 - 2018.06*, Bachelor in Computer Science.
&emsp; School of Information Engineering, Zhengzhou University.

# 🔬 Internships
- *2020.10 - 2023.06*, &emsp; Horizon Robotics &emsp; Research Intern.
