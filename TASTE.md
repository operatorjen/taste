# Taste

```
                +-----------------------+
                |  REFINEMENT           |
                |  (Plasticity Engines) |-←--←--←-+
                +-----------+-----------+         |
                            |                     ↑
            +--←--←--←--←---↓-←--←--←--←--←-+     |
            ↓               |               ↑     ↑
+-----------+--------+   +--+------------+→-+     |
| DISCERNMENT        |   |  STATE        |        ↑
| (Embodied Sensors) |   |  (Frameworks) |        |
+-----------+--------+   +---------------+        ↑
            ↓                   |                 |
+-----------+--------+          ↑                 ↑
|  OUTPUT            |          |                 |
|  (Actions)         |----→--→--↑--→--→--→--→--→--+
+-----------+--------+          |
            ↓                   ↑
            +--→--→--→--+-------+--------+
                        |   INPUT        |
                        |   (Results)    |
                        +----------------+
```

## Stable Loop and State Quality

```
Let {I}  = Embodied Sensors
Let {S}  = States  
Let {I'} = Feedback

Production Rules:
1. ({I}, {S_t}) → O              (Discernment)
2. O → {I'}                      (Output -> Input)
3. (O, {I'}, {S_t}) → {S_{t+1}}  (Refinement) 
```

## Convergence and Plasticity:

```
Cycle 1: I₁ + S₀ → O₁ → [O₁ + I₁' + S₀ → S₁]
Cycle 2: I₂ + S₁ → O₂ → [O₂ + I₂' + S₁ → S₂]
Cycle 3: I₃ + S₂ → O₃ → [O₃ + I₃' + S₂ → S₃]
...
Cycle N: I_N + S_{N-1} → O_N → [O_N + I_N' + S_{N-1} → S_N ≈ S_{N-1}]
```