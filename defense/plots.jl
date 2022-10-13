using Plots, FileIO

p = plot(x->x^2, color=:darkblue, background_color = :transparent, foreground_color=:black, legend = :none,thickness_scaling=2)

save("cup.svg", p)

plot!([-2, 3], [4,9], markers=:circle, color=:red)
save("cupLine.svg", p)

plot!([0.5, 0.5], [6.5,0.25], style=:dash, color=:red, markers=:x)
save("cupLineAvg.svg", p)