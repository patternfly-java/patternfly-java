package org.patternfly.componentgroup.pageheader;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.breadcrumb.Breadcrumb;
import org.patternfly.component.label.Label;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;

public class PageHeader extends BaseComponent<HTMLElement, PageHeader> implements
        ComponentIcon<HTMLElement, PageHeader> {

    //language=HTML
    private final static String HTML_JUST_FOR_REFERENCE = """
            <section class="pf-v6-c-page__main-section">
                <div class="pf-v6-l-flex">
                    <div class="pf-m-align-self-center iconMinWidth-0-2-1">
                        <img src="/images/f4fb6361.svg" alt="page-header-icon">
                    </div>
                    <hr class="pf-v6-c-divider pf-m-vertical">
                    <div class="pf-m-flex-1">
                        <div class="pf-v6-l-split pf-m-gutter">
                            <div class="pf-v6-l-split__item">
                                <h1 class="pf-v6-c-content--h1 pf-v6-u-mb-sm">My Title</h1>
                            </div>
                            <div class="pf-v6-l-split__item">
                                <span class="pf-v6-c-label pf-m-filled pf-v5-u-align-content-center">
                                    <span class="pf-v6-c-label__content">
                                        <span class="pf-v6-c-label__text">Org. Administrator</span>
                                    </span>
                                </span>
                            </div>
                            <div class="pf-v6-l-split__item pf-m-fill"></div>
                            <div class="pf-v6-l-split__item">
                                <div class="pf-v6-c-action-list">
                                    <div class="pf-v6-c-action-list__item">
                                        <button class="pf-v6-c-menu-toggle pf-m-plain" type="button"
                                                aria-label="Action list single group kebab" aria-expanded="false">
                                            <span class="pf-v6-c-menu-toggle__icon">
                                                <svg class="pf-v6-svg" viewBox="0 0 192 512">
                                                    <path d="M96..."></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="pf-v6-c-content--p">This is a subtitle for your page header</p>
                        <a label="Go to this link" aria-disabled="false" class="pf-v6-c-button pf-m-link pf-m-inline">
                            <span class="pf-v6-c-button__text">Go to this link</span>
                            <span class="pf-v6-c-button__icon pf-m-end">
                                <svg class="pf-v6-svg pf-v6-u-ml-sm" viewBox="0 0 512 512" width="1em" height="1em">
                                    <path d="M432..."></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            """;

    // ------------------------------------------------------ factory

    public static PageHeader pageHeader() {
        return new PageHeader();
    }

    // ------------------------------------------------------ instance

    PageHeader() {
        super(ComponentType.PageHeader, div().element());
    }

    // ------------------------------------------------------ add

    public PageHeader addBreadcrumb(Breadcrumb breadcrumb) {
        return add(breadcrumb);
    }

    public PageHeader add(Breadcrumb breadcrumb) {
        return this;
    }

    public PageHeader addLabel(Label label) {
        return add(label);
    }

    public PageHeader add(Label label) {
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public PageHeader icon(Element icon) {
        return this;
    }

    @Override
    public PageHeader removeIcon() {
        return this;
    }

    public PageHeader title(String title) {
        return this;
    }

    public PageHeader subTitle(String subTitle) {
        return this;
    }

    @Override
    public PageHeader that() {
        return this;
    }
}
