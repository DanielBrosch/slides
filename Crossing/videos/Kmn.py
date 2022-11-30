        
from manim import *
from manim.animation.transform_matching_parts import TransformMatchingAbstractBase
from manim_revealjs import *


class FixedEndsLine(Line):
    def __init__(self, start=LEFT, end=RIGHT, buff=0, path_arc=None, **kwargs):
        super().__init__(start, end, buff, path_arc, **kwargs)
        self.add_updater(lambda e:         e.put_start_and_end_on(start.get_center(), end.get_center()))

class Kmn(PresentationScene):
    # CONFIG={
	# 	"camera_config":{"background_color":"#475147"}
	# }
    def construct(self):

        self.camera.background_color = "#FFF"
        # self.camera.background_color = "#111"
        # self.add(ScreenRectangle(fill_color=PURE_RED))

        # useColors = TexTemplate()
        # useColors.add_to_preamble(r"\usepackage{xcolor}")


        # title = Tex("How many edges can there be in a triangle free graph?").shift(UP*2)

        waits = 1



        # self.add(title)
        # if waits == 1: self.wait()

        # self.end_fragment()

        vertices = range(12)
        edges = []
        for i in range(4):
            for j in range(4,12):
                edges.append((i,j))

        g = Graph(vertices, edges, vertex_config={"stroke_width": 4, "color":BLACK, "radius": 0.1}).set_color(BLACK)
        
        
        for i in range(4):
            g[i].move_to(DOWN + (i-1.5)*LEFT)
            g[i].set_fill(PURE_RED)
        for i in range(4,12):
            g[i].move_to(UP + (i-7.5)*LEFT*2/3)
            g[i].set_fill(PURE_BLUE)

        
        # self.play(Create(g))
        self.add(g)
        # self.end_fragment()

        self.play(Write(Tex('$mn$ crossings').move_to(DOWN*2).set_color(BLACK)))

        self.end_fragment()

        anims = []
        for i in range(4, 8):
            anims.append(g[i].animate.shift(RIGHT))
        for i in range(8, 12):
            anims.append(g[i].animate.shift(LEFT))

        

        self.play(*anims)
        self.end_fragment()
        
        # g1 = VGroup(g[0],g[1],g[2],g[3])
        # self.play(Rotate(g1,PI*0.5))

        self.play(
            g[0].animate.move_to(UP*3),
            g[1].animate.move_to(UP*2),
            g[2].animate.move_to(DOWN*0),
            g[3].animate.move_to(DOWN),
        )

        
        self.end_fragment()

        self.play(
            Write(Tex('$Z(m,n) := \\left\\lfloor\\frac{(m-1)^2}{4}\\right\\rfloor \\left\\lfloor\\frac{(n-1)^2}{4}\\right\\rfloor$ crossings').move_to(DOWN*3).set_color(PURE_RED))
        )

        self.end_fragment()


        