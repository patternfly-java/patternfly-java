import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.BreakpointCollector.modifiers;
import static org.patternfly.style.BreakpointCollector.verticalModifiers;
import static org.patternfly.style.Breakpoints.breakpoints;

@SuppressWarnings("ResultOfMethodCallIgnored")
public class BreakpointsDemo {

    public void collectorDemo() {
        // @start region = collector
        // pf-m-foo pf-m-bar-on-lg
        breakpoints(default_, "foo", lg, "bar")
                .stream().collect(modifiers());

        // pf-m-prefix-foo pf-m-prefix-bar-on-lg
        breakpoints(default_, "foo", lg, "bar")
                .stream().collect(modifiers(v -> "prefix-" + v));

        // pf-m-a pf-m-b-on-sm-height pf-m-c-on-md-height pf-m-d-on-lg-height pf-m-e-on-xl-height pf-m-f-on-2xl-height
        breakpoints(
                default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f")
                .stream().collect(verticalModifiers());
        // @end region = collector
    }

    public void factoryAndFluentDemo() {
        // @start region = factoryAndFluent
        breakpoints(
                default_, 1,
                sm, 2,
                lg, 3);
        breakpoints()
                .default_(1)
                .sm(2)
                .lg(3);
        // @end region = factoryAndFluent
    }

    public void modifiersDemo() {
        // @start region = modifiers
        // pf-m-foo pf-m-bar-on-lg
        breakpoints(default_, "foo", lg, "bar").modifiers();

        // pf-m-start-foo__end-on-sm pf-m-start-bar__end-on-lg
        breakpoints(sm, "foo", lg, "bar").modifiers(v -> "start-" + v + "__end");

        // pf-m-a pf-m-b-on-sm-height pf-m-c-on-md-height pf-m-d-on-lg-height pf-m-e-on-xl-height pf-m-f-on-2xl-height
        breakpoints(
                default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f")
                .verticalModifiers();

        breakpoints(md, "foo", lg, "bar").modifiers(md); // pf-m-foo, because md in [md, lg]
        breakpoints(md, "foo", lg, "bar").modifiers(_2xl); // pf-m-foo, because [md, lg] < _2xl
        breakpoints(md, "foo", lg, "bar").modifiers(sm); // "", because [md, lg] > sm
        // @end region = modifiers
    }
}
