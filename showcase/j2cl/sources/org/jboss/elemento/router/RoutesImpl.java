package org.jboss.elemento.router;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

public class RoutesImpl implements Routes {
  public static final Routes INSTANCE = new RoutesImpl();

  private final Map<Place, Supplier<Page>> places;

  private RoutesImpl() {
    this.places = new HashMap<>();
    places.put(new Place("/contribute", "Contribute"), () -> new org.patternfly.showcase.ContributePage());
    places.put(new Place("/get-in-touch", "Get in touch"), () -> new org.patternfly.showcase.GetInTouchPage());
    places.put(new Place("/get-started", "Get started"), () -> new org.patternfly.showcase.GetStartedPage());
    places.put(new Place("/"), () -> new org.patternfly.showcase.HomePage());
    places.put(new Place("/components/accordion", "Accordion"), () -> new org.patternfly.showcase.component.AccordionComponent());
    places.put(new Place("/components/action-list", "Action list"), () -> new org.patternfly.showcase.component.ActionListComponent());
    places.put(new Place("/components/alert", "Alert"), () -> new org.patternfly.showcase.component.AlertComponent());
    places.put(new Place("/components/avatar", "Avatar"), () -> new org.patternfly.showcase.component.AvatarComponent());
    places.put(new Place("/components/back-to-top", "Back to top"), () -> new org.patternfly.showcase.component.BackToTopComponent());
    places.put(new Place("/components/badge", "Badge"), () -> new org.patternfly.showcase.component.BadgeComponent());
    places.put(new Place("/components/banner", "Banner"), () -> new org.patternfly.showcase.component.BannerComponent());
    places.put(new Place("/components/brand", "Brand"), () -> new org.patternfly.showcase.component.BrandComponent());
    places.put(new Place("/components/breadcrumb", "Breadcrumb"), () -> new org.patternfly.showcase.component.BreadcrumbComponent());
    places.put(new Place("/components/button", "Button"), () -> new org.patternfly.showcase.component.ButtonComponent());
    places.put(new Place("/components/card", "Card"), () -> new org.patternfly.showcase.component.CardComponent());
    places.put(new Place("/components/forms/checkbox", "Checkbox"), () -> new org.patternfly.showcase.component.CheckboxComponent());
    places.put(new Place("/components/chip", "Chip"), () -> new org.patternfly.showcase.component.ChipComponent());
    places.put(new Place("/components/code-block", "Code block"), () -> new org.patternfly.showcase.component.CodeBlockComponent());
    places.put(new Place("/components/code-editor", "Code editor"), () -> new org.patternfly.showcase.component.CodeEditorComponent());
    places.put(new Place("/components/all-components", "All components"), () -> new org.patternfly.showcase.component.ComponentsPage());
    places.put(new Place("/components/description-list", "Description list"), () -> new org.patternfly.showcase.component.DescriptionListComponent());
    places.put(new Place("/components/divider", "Divider"), () -> new org.patternfly.showcase.component.DividerComponent());
    places.put(new Place("/components/drawer", "Drawer"), () -> new org.patternfly.showcase.component.DrawerComponent());
    places.put(new Place("/components/menus/dropdown", "Dropdown"), () -> new org.patternfly.showcase.component.DropdownComponent());
    places.put(new Place("/components/empty-state", "Empty state"), () -> new org.patternfly.showcase.component.EmptyStateComponent());
    places.put(new Place("/components/expandable-section", "Expandable section"), () -> new org.patternfly.showcase.component.ExpandableSectionComponent());
    places.put(new Place("/components/forms/form", "Form"), () -> new org.patternfly.showcase.component.FormComponent());
    places.put(new Place("/components/forms/form-control", "Form control"), () -> new org.patternfly.showcase.component.FormControlComponent());
    places.put(new Place("/components/forms/form-select", "Form select"), () -> new org.patternfly.showcase.component.FormSelectComponent());
    places.put(new Place("/components/helper-text", "Helper text"), () -> new org.patternfly.showcase.component.HelperTextComponent());
    places.put(new Place("/components/hint", "Hint"), () -> new org.patternfly.showcase.component.HintComponent());
    places.put(new Place("/components/icon", "Icon"), () -> new org.patternfly.showcase.component.IconComponent());
    places.put(new Place("/components/input-group", "Input group"), () -> new org.patternfly.showcase.component.InputGroupComponent());
    places.put(new Place("/components/jump-links", "Jump links"), () -> new org.patternfly.showcase.component.JumpLinksComponent());
    places.put(new Place("/components/label", "Label"), () -> new org.patternfly.showcase.component.LabelComponent());
    places.put(new Place("/components/list", "List"), () -> new org.patternfly.showcase.component.ListComponent());
    places.put(new Place("/components/masthead", "Masthead"), () -> new org.patternfly.showcase.component.MastheadComponent());
    places.put(new Place("/components/menus/menu", "Menu"), () -> new org.patternfly.showcase.component.MenuComponent());
    places.put(new Place("/components/menus/menu-toggle", "Menu toggle"), () -> new org.patternfly.showcase.component.MenuToggleComponent());
    places.put(new Place("/components/navigation", "Navigation"), () -> new org.patternfly.showcase.component.NavigationComponent());
    places.put(new Place("/components/page", "Page"), () -> new org.patternfly.showcase.component.PageComponent());
    places.put(new Place("/components/panel", "Panel"), () -> new org.patternfly.showcase.component.PanelComponent());
    places.put(new Place("/components/popover", "Popover"), () -> new org.patternfly.showcase.component.PopoverComponent());
    places.put(new Place("/components/progress", "Progress"), () -> new org.patternfly.showcase.component.ProgressComponent());
    places.put(new Place("/components/forms/radio", "Radio"), () -> new org.patternfly.showcase.component.RadioComponent());
    places.put(new Place("/components/simple-list", "Simple list"), () -> new org.patternfly.showcase.component.SimpleListComponent());
    places.put(new Place("/components/skeleton", "Skeleton"), () -> new org.patternfly.showcase.component.SkeletonComponent());
    places.put(new Place("/components/slider", "Slider"), () -> new org.patternfly.showcase.component.SliderComponent());
    places.put(new Place("/components/spinner", "Spinner"), () -> new org.patternfly.showcase.component.SpinnerComponent());
    places.put(new Place("/components/switch", "Switch"), () -> new org.patternfly.showcase.component.SwitchComponent());
    places.put(new Place("/components/tabs", "Tabs"), () -> new org.patternfly.showcase.component.TabsComponent());
    places.put(new Place("/components/forms/text-area", "Text area"), () -> new org.patternfly.showcase.component.TextAreaComponent());
    places.put(new Place("/components/text", "Text"), () -> new org.patternfly.showcase.component.TextContentComponent());
    places.put(new Place("/components/forms/text-input", "Text input"), () -> new org.patternfly.showcase.component.TextInputComponent());
    places.put(new Place("/components/text-input-group", "Text input group"), () -> new org.patternfly.showcase.component.TextInputGroupComponent());
    places.put(new Place("/components/title", "Title"), () -> new org.patternfly.showcase.component.TitleComponent());
    places.put(new Place("/components/toggle-group", "Toggle group"), () -> new org.patternfly.showcase.component.ToggleGroupComponent());
    places.put(new Place("/components/tooltip", "Tooltip"), () -> new org.patternfly.showcase.component.TooltipComponent());
    places.put(new Place("/components/truncate", "Truncate"), () -> new org.patternfly.showcase.component.TruncateComponent());
    places.put(new Place("/layouts/bullseye", "Bullseye"), () -> new org.patternfly.showcase.layout.BullseyeLayout());
    places.put(new Place("/layouts/flex", "Flex"), () -> new org.patternfly.showcase.layout.FlexLayout());
    places.put(new Place("/layouts/gallery", "Gallery"), () -> new org.patternfly.showcase.layout.GalleryLayout());
    places.put(new Place("/layouts/grid", "Grid"), () -> new org.patternfly.showcase.layout.GridLayout());
    places.put(new Place("/layouts/about-layouts", "Layouts"), () -> new org.patternfly.showcase.layout.LayoutsPage());
    places.put(new Place("/layouts/level", "Level"), () -> new org.patternfly.showcase.layout.LevelLayout());
    places.put(new Place("/layouts/split", "Split"), () -> new org.patternfly.showcase.layout.SplitLayout());
    places.put(new Place("/layouts/stack", "Stack"), () -> new org.patternfly.showcase.layout.StackLayout());
  }

  public Map<Place, Supplier<Page>> places() {
    return places;
  }
}
