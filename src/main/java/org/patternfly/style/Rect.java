package org.patternfly.style;

import java.util.Objects;

public class Rect {

    public final int width;
    public final int height;

    public Rect() {
        this(0, 0);
    }

    public Rect(int width, int height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Rect rect = (Rect) o;
        return width == rect.width && height == rect.height;
    }

    @Override
    public int hashCode() {
        return Objects.hash(width, height);
    }

    @Override
    public String toString() {
        return "Rect(" + width + ", " + height + ")";
    }
}
