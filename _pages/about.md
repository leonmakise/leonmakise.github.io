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

I received my Ph.D. degree in Computer Science from Wuhan University in 2024 under the supervision of [Prof. Lefei Zhang](https://scholar.google.ch/citations?user=BLKHwNwAAAAJ&hl=en), and I am currently a Postdoctoral Researcher at the Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), mentored by [Prof. Salman Khan](https://salman-h-khan.github.io/). I was a research intern at [Horizon Robotics](https://www.horizon.cc/), working with [Dr. Qian Zhang](https://scholar.google.com/citations?user=pCY-bikAAAAJ) and [Dr. Guoli Wang](https://scholar.google.com/citations?user=z-25fk0AAAAJ). I was also a visiting student in [LV-Lab](http://lv-nus.org/) at NUS under the supervision of [Prof. Xinchao Wang](https://scholar.google.ch/citations?user=w69Buq0AAAAJ&hl=en).

My research interests include vision for natural images (all-in-one restoration), raw images (neural ISP), autonomous driving scenes, and remote sensing images (hyperspectral).

📧 I am open to collaboration and welcome inquiries from anyone interested in my research topics. Feel free to reach out via jiaqi.ma AT mbzuai.ac.ae.

# 🔥 News
- *2026.03*: &nbsp;✨ We won 4th place in the first real-world all-in-one image restoration challenge by LOVIF @ CVPR 2026.
- *2026.02*: &nbsp;🎉 RainDiff was accepted by CVPR 2026. Congrats to all collaborators!
- *2026.01*: &nbsp;🎉 Simtoken was accepted by ICASSP 2026. Congrats to all collaborators!
- *2025.12*: &nbsp;✨ [*Token Expand-Merge*](https://arxiv.org/abs/2512.09927) is now on arXiv (Vision-Language-Action Models).
- *2025.12*: &nbsp;✨ [*ClusIR*](https://arxiv.org/abs/2512.10948) is now on arXiv (All-in-one Image Restoration).
- *2025.12*: &nbsp;✨ [*EvoIR*](https://arxiv.org/abs/2512.05104) is now on arXiv (All-in-one Image Restoration).
- *2025.05*: &nbsp;🎉 Perceive-IR was accepted by TIP.
- *2025.04*: &nbsp;🎉 HyperSIGMA was accepted by TPAMI.
- *2024.12*: &nbsp;🥂 In 2025, I joined [MBZUAI](https://www.ival-mbzuai.com/) as a postdoctoral associate working with [Assoc. Prof. Salman Khan](https://salman-h-khan.github.io/)!
- *2024.09*: &nbsp;🥂 We released a project on [*All-in-one Image Restoration*](https://github.com/leonmakise/Awesome-All-in-one-Image-Restoration-Methods). We are always updating recent methods on this emerging task. A comprehensive survey on All-in-one Image Restoration is on the way; stay tuned.
- *2024.08*: &nbsp;✨ [*Perceive-IR*](https://arxiv.org/abs/2408.15994) is now on arXiv (All-in-one Image Restoration).
- *2024.06*: &nbsp;✨ [*HyperSIGMA*](https://arxiv.org/abs/2406.11519) is now on arXiv (the first one-billion-parameter remote sensing foundation model!).
- *2023.06*: &nbsp;✨ [*ProRes*](https://arxiv.org/abs/2306.13653) is now on arXiv (All-in-one Image Restoration).
- *2023.04*: &nbsp;🎉 One paper was accepted by Neural Networks.
- *2022.06*: &nbsp;🎉 One paper was accepted by ACM MM 2022.
- *2021.03*: &nbsp;🎉 One paper was accepted by CVPR 2021.
- *2020.10*: &nbsp;🎉 One paper was accepted by Pattern Recognition.
- *2019.05*: &nbsp;🎉 One paper was accepted by IJCAI 2019.

# 📝 Publications 
Note: * Equal contribution, ^ Corresponding authors.

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIP</div><img src='images/perceive-ir.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='show_paper_citations' data='BJUlpoMAAAAJ:_FxGoFyzp5QC'></span>
- [Perceive-IR: Learning to Perceive Degradation Better for All-in-One Image Restoration](https://arxiv.org/abs/2408.15994)

Xu Zhang\*, **Jiaqi Ma**\*, Guoli Wang, Qian Zhang, Huan Zhang, Lefei Zhang^.

[**Code**](https://github.com/House-yuyu/Perceive-IR), [**Project**](https://house-yuyu.github.io/Perceive-IR/) 

We propose Perceive-IR, an all-in-one image restorer designed to achieve fine-grained quality control that enables restored images to more closely resemble their undistorted counterparts, regardless of the type or severity of degradation. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI</div><img src='images/hypersigma.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='show_paper_citations' data='BJUlpoMAAAAJ:UeHWp8X0CEIC'></span>
- [HyperSIGMA: Hyperspectral Intelligence Comprehension Foundation Model](https://arxiv.org/abs/2406.11519)


Di Wang\*, Meiqi Hu\*, Yao Jin\*, Yuchun Miao\*, Jiaqi Yang\*, Yichu Xu\*, Xiaolei Qin\*, **Jiaqi Ma**\*, Lingyu Sun\*, Chenxing Li\*, Chuan Fu, Hongruixuan Chen, Chengxi Han^, Naoto Yokoya, Jing Zhang^, Minqiang Xu, Lin Liu, Lefei Zhang, Chen Wu^, Bo Du^, Dacheng Tao, Liangpei Zhang^.

[**Code**](https://github.com/WHU-Sigma/HyperSIGMA)


We introduce HyperSIGMA, a vision transformer-based foundation model for HSI interpretation, scalable to over a billion parameters.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review (TIP)</div><img src='images/prores.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='show_paper_citations' data='BJUlpoMAAAAJ:qjMakFHDy7sC'></span>
- [ProRes: Exploring Degradation-aware Visual Prompt for Universal Image Restoration](https://arxiv.org/abs/2306.13653)

**Jiaqi Ma**\*, Tianheng Cheng\*, Guoli Wang, Qian Zhang, Xinggang Wang, Lefei Zhang^.

[**Code**](https://github.com/leonmakise/ProRes), [**Project**](https://leonmakise.github.io/ProRes/) 

We make the first attempt to introduce visual prompts into image restoration tasks and explore new findings.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neural Networks</div><img src='images/nn2023.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='show_paper_citations' data='BJUlpoMAAAAJ:2osOgNQ5qMEC'></span>
- [Restoration and Enhancement on Low Exposure Raw Images by Joint Demosaicing and Denoising](https://www.sciencedirect.com/science/article/pii/S0893608023001442)

**Jiaqi Ma**, Guoli Wang, Lefei Zhang^, Qian Zhang. 

  
We propose a joint demosaicing and denoising framework for restoring and enhancing low exposure raw images.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2022</div><img src='images/acm mm2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='show_paper_citations' data='BJUlpoMAAAAJ:9yKSN-GCB0IC'></span>
- [ELMformer: Efficient Raw Image Restoration with a Locally Multiplicative Transformer](https://dl.acm.org/doi/abs/10.1145/3503161.3547767)
  
**Jiaqi Ma**, Shengyuan Yan, Lefei Zhang^, Guoli Wang, Qian Zhang. 

[**Code**](https://github.com/leonmakise/ELMformer) 
  
We propose an efficient transformer framework for raw image restoration.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2021</div><img src='images/cvpr2021.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [Pseudo Facial Generation with Extreme Poses for Face Recognition](https://openaccess.thecvf.com/content/CVPR2021/papers/Wang_Pseudo_Facial_Generation_With_Extreme_Poses_for_Face_Recognition_CVPR_2021_paper.pdf)
  
Guoli Wang, **Jiaqi Ma**, Qian Zhang, Jiwen Lu^, Jie Zhou. 

[**Code**](https://github.com/leonmakise/PFGEPFR)

We discover the residual in extreme poses and propose a lightweight plug-in for face recognition.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Pattern Recognition</div><img src='images/pr2020.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='show_paper_citations' data='BJUlpoMAAAAJ:u-x6o8ySG0sC'></span>
- [Discriminative subspace matrix factorization for multiview data clustering](https://www.sciencedirect.com/science/article/abs/pii/S0031320320304799)
  
**Jiaqi Ma**, Yipeng Zhang, Lefei Zhang^. 

We extend PSMF to multi-view scenarios and discuss the combination of supervised and unsupervised frameworks.
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

# 📖 Education
- *2021.09 - 2024.12*, Ph.D. in Computer Science.
&emsp; School of Computer Science, Wuhan University.


- *2018.09 - 2021.06*, Master's degree in Computer Science.
&emsp; School of Computer Science, Wuhan University.

- *2014.09 - 2018.06*, Bachelor's degree in Computer Science.
&emsp; School of Information Engineering, Zhengzhou University.

# 🔬 Internships
- *2020.10 - 2023.06*, &emsp; Horizon Robotics &emsp; Research Intern.

<!-- # 👫 Collaboration
Tianheng Cheng, Zhihe Lu, Jiawang Bai, Zeyu Xiao

Xu Zhang, Shengyuan Yan, Hongyu Li

Chuan Fu, Di Wang, Chengxi Han, Yichu Xu, Yuchun Miao, Jiaqi Yang, Meiqi Hu, Yao Jin, Xiaolei Qin, Lingyu Sun, Chenxing Li, Hongruixuan Chen
 -->

<!-- # 👫 Academic Service -->

# 🧾 Statistic
<div style="text-align: center;">
<div style="transform: scale(0.5); transform-origin: 0 0;">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=5Z8qbZcELaDfXeFkEVUmlkL70cN170MHfTr1ioboS78&cl=ffffff&w=a"></script>
</div>
</div>
