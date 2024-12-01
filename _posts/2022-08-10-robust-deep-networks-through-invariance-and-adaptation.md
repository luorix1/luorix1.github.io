---
title: "Robust Deep Networks through Invariance and Adaptation"
date: 2022-08-08
permalink: /posts/2022/08/blog-post-6/
tags:
  - Computer Vision
  - Machine Learning
  - Conference
---

Speaker: Chelsea Finn (Stanford)

how can we go beyond training data distribution

- requires new benchmarks not i.i.d

in real-world applications, significant drops in performance are quite prevalent

- this is due to distribution shift!
- WILDS dataset has 10 datasets with distribution shift

distribution shift can also occur over time

- WILD-TIME dataset has 6 datasets with temporal distribution shift

takeaways from creating the above benchmarks on distribution shift

- not all distribution shifts cause performance drops!
- not all drops in performance are caused by distribution shift
- make sure there are natural sources of leverage
- some methods help in certain cases but there are none that work across the board

this talk is focused on covariate shift

- leveraging domain/group labels
- leveraging unlabeled data from target distribution

### leveraging domain/group labels

prior approach

- train domain-invariant models!
    - learn representations invariant to domain
    - introduce regularizer encouraging the model to discard information dependent on domain

encourage domain invariance without constraining the internal representation

- regularizers may be too constraining, causing situational performance degradation

LISA (learning invariant predictors with selective augmentation)

- selectively apply mixup to data points based on their domain of origin
- intra-label LISA: interpolate samples with the same label but different domain
- intra-domain LISA: interpolate samples with the same domain but different labels

data rebalancing is another prior method that exists

- upsample or upweight underrepresented samples

### leveraging unlabeled data from target distribution

most of the above methods

- require domain annotation
- don’t address more severe underspecified data

diversify and disambiguate (DivDis)

- train multiple functions to minimize training error!
- this is not
    - an ensemble of networks? → even if we re-train with different seeds, the decision boundary turns out similar
        - show little disagreement
        - could lead to worse outcomes in larger-scale settings due to bias

- encourage models to make diverse predictions for unlabeled data in the test distribution
    - we don’t need labels to do this!
- maximize disagreement on unlabeled test data by minimizing statistical dependence
    - KL divergence should be minimized for output from different functions!

- some options for head selection
    - randomly label some validation points, select most accurate head from the functions
    - query label for most disagreed points, select most accurate head
    - inspect learned functions using interpretability methods

experiment: completely correlated data

- design training sets where there are complete correlations between labels and spurious attributes
- imperfect or no correlation for the test set
- measure average and worst-group accuracy
- DivDis with 2 heads, 16 active queries
- compare with ERM, JTT, Group DRO (none of these are designed to handle perfect correlation)
- DIvDis shows significant improvement in worst-group accuracy!
- also compare with previous methods that are applied to settings more fitting to their purpose
    - ERM + minority: train with training data + minority examples
    - DFR: ERM + fine-tuning on target examples
- DivDis is more label efficient and performs better!

existing methods assume you know group labels during hyperparameter tuning

- DivDis can be tuned well based on just average accuracy → you don’t need group labels

miscellaneous experiments

- other ways to ensemble? → ensembles struggle to learn diverse solutions

diverse ensembles for RL policies?

- learn & remember multiple solutions to training setting
- adapt solution set to test setting and select based on performance
- assumptions
    - adapt with modest amount of data
    - change in setting must be local (cannot be completely different)
- learn controllable space of diverse policies via latent variables
- achieve return within $\epsilon$ of best policy (constrained optimization)

other open challenges

- label shift
    - i.e. long-tail distributions show low performance on the tail
        - hypothesis: fails to transfer class-agnostic invariances from the. ead classes to the tail classes
- concept shift
    - much more difficult because $p(y|x)$ itself has changed
    - can we “edit” ML models?

a better understanding and categorization of distribution shifts is needed!