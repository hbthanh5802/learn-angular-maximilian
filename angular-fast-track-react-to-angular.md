# Angular Fast Track — React/TypeScript Developer

> Mục tiêu: từ React + TypeScript → có thể xây Angular application production nhanh nhưng vẫn hiểu đúng Angular mental model.

## Roadmap

```text
Phase 0  Setup & Angular mindset
   ↓
Phase 1  Angular University — Angular Deep Dive
   ↓
Phase 2  Max — selected sections
   ↓
Phase 3  RxJS
   ↓
Phase 4  HTTP
   ↓
Phase 5  Reactive Forms
   ↓
Phase 6  Routing
   ↓
Phase 7  Angular University — Signals In Depth
   ↓
Phase 8  Authentication & Architecture
   ↓
Phase 9  State Management
   ↓
Phase 10 Project thực tế
   ↓
Phase 11 Testing
   ↓
Phase 12 Performance
   ↓
Phase 13 Advanced / Optional
```

---

# Phase 0 — Setup & Mindset

**1–2h**

- [ ] Angular CLI
- [ ] Project structure
- [ ] Standalone Component
- [ ] `bootstrapApplication()`
- [ ] Angular DevTools

Không cần học lại: JS/TS cơ bản, HTML/CSS, REST API, Promise, npm, Git.

---

# Phase 1 — Angular Core

## Course: Angular University — Angular Deep Dive

**~12h — học kỹ**

### Components & Templates 🔴

- [ ] Component / Template
- [ ] Interpolation
- [ ] Property binding
- [ ] Event binding
- [ ] Two-way binding
- [ ] `input()`
- [ ] `output()`
- [ ] `model()`
- [ ] `@if`
- [ ] `@for`
- [ ] `@switch`
- [ ] `track`

React mapping:

```text
React props       → input()
Callback prop     → output()
JSX conditional   → @if
array.map()       → @for
children          → ng-content
```

### Directives 🔴

- [ ] Component vs Directive
- [ ] Attribute Directive
- [ ] Structural Directive
- [ ] Custom Directive
- [ ] Host behavior / Host Directives

> Directive = thêm behavior cho element/component hiện có.

### Pipes 🟡

- [ ] Built-in / Custom Pipe
- [ ] Pure / Impure Pipe
- [ ] Khi nào pipe chạy lại?
- [ ] Performance implications

### View & Content 🔴

- [ ] `ViewChild` / `ViewChildren`
- [ ] `ContentChild` / `ContentChildren`
- [ ] `viewChild()` / `contentChild()`
- [ ] Content Projection
- [ ] `ng-content`

```text
ViewChild   → thứ nằm trong view của component
ContentChild → thứ được project vào component
```

### Lifecycle 🔴

- [ ] `constructor`
- [ ] `ngOnChanges`
- [ ] `ngOnInit`
- [ ] `ngDoCheck`
- [ ] `ngAfterContentInit`
- [ ] `ngAfterViewInit`
- [ ] `ngOnDestroy`
- [ ] `DestroyRef`
- [ ] `afterNextRender()`

```text
constructor
→ ngOnChanges
→ ngOnInit
→ ...
→ ngAfterViewInit
→ ...
→ ngOnDestroy
```

### Dependency Injection 🔴🔴🔴

- [ ] DI
- [ ] Injector
- [ ] Provider
- [ ] Token / `InjectionToken`
- [ ] `@Injectable()`
- [ ] `inject()`
- [ ] `providedIn: 'root'`
- [ ] Hierarchical DI
- [ ] Provider scope
- [ ] `useClass`
- [ ] `useValue`
- [ ] `useFactory`

Mental model:

```text
Token
  ↓
Provider
  ↓
Injector
  ↓
Instance
  ↓
Component / Service
```

### View Encapsulation 🟡

- [ ] `Emulated`
- [ ] `None`
- [ ] `ShadowDom`

### Change Detection 🔴🔴🔴

- [ ] Default CD
- [ ] `OnPush`
- [ ] Signals + OnPush
- [ ] Zone
- [ ] Zoneless
- [ ] Template evaluation
- [ ] Performance implications

```text
State / Input / Event
        ↓
Change Detection
        ↓
Template evaluation
        ↓
DOM update
        ↓
Browser rendering
```

## Phase 1 checkpoint

Phải tự giải thích được:

- [ ] Component / Template
- [ ] Input / Output
- [ ] `@if` / `@for` / `track`
- [ ] Component vs Directive
- [ ] ViewChild vs ContentChild
- [ ] Content Projection
- [ ] Lifecycle
- [ ] DI / Provider / Injector
- [ ] OnPush
- [ ] Signals + Change Detection

---

# Phase 2 — Max: học chọn lọc

## Course: Angular — The Complete Guide — Maximilian Schwarzmüller

**Không xem toàn bộ ~56h.**

### Getting Started 🟢

- [ ] Modern project setup
- [ ] CLI
- [ ] Project structure

### Essentials 🟢

Chỉ review nếu cần:

- [ ] Signals
- [ ] Signal Inputs
- [ ] `output()`
- [ ] `@if` / `@for`
- [ ] Content Projection
- [ ] Services / `inject()`

### NgModule 🟡

**~25–30 phút**

- [ ] NgModule concept
- [ ] `declarations`
- [ ] `imports`
- [ ] `exports`
- [ ] `providers`
- [ ] `bootstrap`
- [ ] AppModule
- [ ] Feature Module
- [ ] SharedModule
- [ ] Lazy-loaded Module
- [ ] `forRoot()` / `forChild()`

> Mục tiêu: đọc/maintain Angular legacy code. Không dùng NgModule làm mental model chính cho code mới.

### Components & Templates Deep Dive 🔴

- [ ] Lifecycle
- [ ] DestroyRef
- [ ] ViewChild / ContentChild
- [ ] Content Projection
- [ ] View Encapsulation
- [ ] `afterNextRender()`
- [ ] `input()` / `output()` / `model()`

### Directives 🔴

- [ ] Attribute Directive
- [ ] Structural Directive
- [ ] HostBinding / HostListener
- [ ] Host Directives

### Pipes 🟡

- [ ] Pure vs Impure
- [ ] Custom Pipe
- [ ] Pipe limitations

### DI Deep Dive 🔴🔴🔴

- [ ] Injector hierarchy
- [ ] Provider hierarchy
- [ ] `useClass`
- [ ] `useValue`
- [ ] `useFactory`
- [ ] `InjectionToken`
- [ ] Environment Injector
- [ ] Element Injector

### Change Detection 🔴🔴🔴

- [ ] Default CD
- [ ] OnPush
- [ ] Signals + OnPush
- [ ] Async Pipe
- [ ] Zoneless

---

# Phase 3 — RxJS

**4–6h**

### Core

- [ ] Observable
- [ ] Observer
- [ ] Subscription
- [ ] `pipe()`
- [ ] Cold vs Hot
- [ ] Unsubscribe

### Operators

- [ ] `map`
- [ ] `filter`
- [ ] `tap`
- [ ] `switchMap`
- [ ] `mergeMap`
- [ ] `concatMap`
- [ ] `exhaustMap`
- [ ] `catchError`
- [ ] `finalize`
- [ ] `debounceTime`
- [ ] `distinctUntilChanged`
- [ ] `shareReplay`

### Subjects & cleanup

- [ ] Subject
- [ ] BehaviorSubject
- [ ] `DestroyRef`
- [ ] `takeUntilDestroyed()`

### Bài tập bắt buộc

```text
Search input
    ↓
debounceTime
    ↓
distinctUntilChanged
    ↓
switchMap
    ↓
HTTP
    ↓
results
```

---

# Phase 4 — HTTP

**2–3h**

- [ ] `HttpClient`
- [ ] GET / POST / PUT / DELETE
- [ ] Request / Response
- [ ] Error handling
- [ ] Loading state
- [ ] Interceptors
- [ ] Auth token
- [ ] Retry khi phù hợp
- [ ] HTTP + RxJS
- [ ] HTTP + Signals

Mental model:

```text
Component
    ↓
Facade / Service
    ↓
HttpClient
    ↓
API
```

---

# Phase 5 — Forms

**3–4h**

### Template-driven 🟡

- [ ] Hiểu concept
- [ ] Đọc được code

### Reactive Forms 🔴🔴🔴

- [ ] FormControl
- [ ] FormGroup
- [ ] FormArray
- [ ] Validators
- [ ] Custom Validator
- [ ] Async Validator
- [ ] `valueChanges`
- [ ] `statusChanges`
- [ ] Dynamic Forms
- [ ] Submission / error display

> Template-driven = understand. Reactive Forms = master. Signal Forms = học sau.

---

# Phase 6 — Routing

**3–4h**

- [ ] Routes
- [ ] `RouterOutlet`
- [ ] `RouterLink`
- [ ] Navigation
- [ ] Route Params
- [ ] Query Params
- [ ] Child Routes
- [ ] Route Data
- [ ] Guards
- [ ] Resolvers
- [ ] Lazy Loading
- [ ] `loadComponent()`
- [ ] `loadChildren()`
- [ ] `provideRouter()`

Mental model:

```text
URL
 ↓
Route
 ↓
Guard
 ↓
Resolver
 ↓
Component
```

---

# Phase 7 — Signals

## Course: Angular University — Angular Signals In Depth

**~7h — học kỹ**

### `signal()`

- [ ] Writable Signal
- [ ] `set()`
- [ ] `update()`
- [ ] Reading `signal()`

### `computed()`

- [ ] Derived state
- [ ] Dependency tracking
- [ ] Caching
- [ ] Lazy evaluation

```text
count() * 2
→ snapshot

computed(() => count() * 2)
→ reactive derived Signal
```

### `effect()`

- [ ] Side effect
- [ ] Dependency tracking
- [ ] Cleanup
- [ ] Injection context

> Không dùng `effect()` để thay thế `computed()`.

### Signal-based APIs

- [ ] `input()`
- [ ] `output()`
- [ ] `model()`
- [ ] Required input
- [ ] Input transforms
- [ ] Two-way binding

### Signal Queries

- [ ] `viewChild()`
- [ ] `viewChildren()`
- [ ] `contentChild()`
- [ ] `contentChildren()`

### Signals ↔ RxJS

- [ ] `toSignal()`
- [ ] `toObservable()`
- [ ] Observable → Signal
- [ ] Signal → Observable
- [ ] Khi nào dùng Observable?
- [ ] Khi nào dùng Signal?

```text
HTTP / Events
     ↓
 Observable
     ↓
 toSignal()
     ↓
   Signal
     ↓
 Template
```

---

# Phase 8 — Authentication & Architecture

**3–5h**

Feature-based structure:

```text
src/app/
├── core/
│   ├── auth/
│   ├── interceptors/
│   └── guards/
│
├── shared/
│   ├── components/
│   ├── directives/
│   └── pipes/
│
└── features/
    ├── users/
    │   ├── pages/
    │   ├── components/
    │   ├── user.service.ts
    │   ├── user.facade.ts
    │   └── user.routes.ts
    │
    └── orders/
```

### Authentication

- [ ] Login
- [ ] Logout
- [ ] Token
- [ ] Interceptor
- [ ] Auth Service
- [ ] Route Guard
- [ ] Permission
- [ ] Error handling

### Architecture

```text
Component
    ↓
Facade
    ↓
Service
    ↓
HttpClient
    ↓
API
```

> Facade là architectural pattern, không phải Angular built-in.

---

# Phase 9 — State Management

Học theo thứ tự:

```text
Component State
      ↓
Service State
      ↓
Signal State
      ↓
Facade
      ↓
Global State
      ↓
NgRx
```

Chưa cần NgRx ngay.

Chỉ học khi:

- [ ] State có nhiều consumer
- [ ] State transitions phức tạp
- [ ] Application đủ lớn
- [ ] Project thực tế yêu cầu

---

# Phase 10 — Project thực tế

## Admin Dashboard / Task Management

### Authentication

- [ ] Login / Logout
- [ ] Auth Guard
- [ ] Permission
- [ ] HTTP Interceptor

### Users

- [ ] List
- [ ] Detail
- [ ] Create / Edit
- [ ] Search
- [ ] Filter
- [ ] Pagination

### Tasks

- [ ] List
- [ ] Detail
- [ ] Create / Edit
- [ ] Status Filter
- [ ] Sorting

### Angular features phải dùng

- [ ] Standalone Components
- [ ] `@if`
- [ ] `@for`
- [ ] `track`
- [ ] Signals
- [ ] `input()`
- [ ] `output()`
- [ ] `model()`
- [ ] DI
- [ ] Facade
- [ ] RxJS
- [ ] HTTP
- [ ] Reactive Forms
- [ ] Routing
- [ ] Lazy Loading
- [ ] Guards
- [ ] Interceptors

---

# Phase 11 — Testing

Học sau khi build project.

- [ ] Component Testing
- [ ] Service Testing
- [ ] DI Testing
- [ ] HTTP Testing
- [ ] Forms Testing
- [ ] Routing Testing
- [ ] Directive Testing
- [ ] Pipe Testing
- [ ] Vitest
- [ ] Component Harnesses

---

# Phase 12 — Performance

- [ ] Change Detection
- [ ] OnPush
- [ ] Signals
- [ ] Zoneless
- [ ] `@defer`
- [ ] Lazy Loading
- [ ] Bundle optimization
- [ ] Tránh unnecessary template work
- [ ] Tránh impure pipe khi không cần
- [ ] `track` đúng identity

```text
State
 ↓
Change Detection
 ↓
Template
 ↓
DOM
 ↓
Browser rendering
```

---

# Phase 13 — Advanced / Optional

Học sau khi Core + Project đã vững:

- [ ] NgRx
- [ ] NgRx Signal Store
- [ ] SSR
- [ ] Hydration
- [ ] Incremental Hydration
- [ ] Signal Forms
- [ ] Advanced Router
- [ ] PWA / Service Worker
- [ ] Animations
- [ ] Advanced Testing
- [ ] Angular Libraries
- [ ] Monorepo / Nx

---

# Legacy Angular — chỉ cần đọc hiểu

- [ ] NgModule
- [ ] AppModule
- [ ] FeatureModule
- [ ] SharedModule
- [ ] CoreModule
- [ ] `declarations`
- [ ] `imports`
- [ ] `exports`
- [ ] `providers`
- [ ] `bootstrap`
- [ ] `*ngIf`
- [ ] `*ngFor`
- [ ] `forRoot()`
- [ ] `forChild()`
- [ ] Constructor injection

> Mục tiêu: maintain / migrate code cũ, không phải dùng làm architecture chính.

---

# Priority

## 🔴 Must Master

- Components
- Templates
- Input / Output
- Signals
- DI
- Change Detection
- RxJS
- Reactive Forms
- Routing
- HTTP
- Architecture

## 🟡 Must Understand

- Directives
- Pipes
- Lifecycle
- View Queries
- Content Projection
- View Encapsulation
- Lazy Loading
- Guards
- Interceptors

## 🟢 Learn Later

- NgRx
- SSR
- Hydration
- Signal Forms
- Advanced Router
- PWA
- Animations

## ⚪ Legacy / Skim

- NgModule architecture
- AppModule
- SharedModule
- CoreModule
- `*ngIf`
- `*ngFor`
- `forRoot()`
- `forChild()`

---

# Recommended Time Budget

| Phase | Nội dung | Thời gian |
|---|---|---:|
| 0 | Setup | 1–2h |
| 1 | Angular University Core | ~12h |
| 2 | Max selected | ~5–8h |
| 3 | RxJS | ~4–6h |
| 4 | HTTP | ~2–3h |
| 5 | Reactive Forms | ~3–4h |
| 6 | Routing | ~3–4h |
| 7 | Signals | ~7h |
| 8 | Architecture/Auth | ~3–5h |
| 9 | State Management | ~2–4h |
| 10 | Project | 20–40h+ |
| 11 | Testing | Later |
| 12 | Performance | Later |

**Core learning:** ~35–45h, chưa tính project.

---

# Learning Method

Với mỗi concept, trả lời 5 câu:

1. Nó là gì?
2. Nó giải quyết vấn đề gì?
3. Angular thực hiện nó như thế nào?
4. React có concept tương đương không?
5. Khi nào KHÔNG nên dùng?

Không học thụ động:

```text
Video
 ↓
Đóng video
 ↓
Tự code lại
 ↓
So sánh React
 ↓
Ghi note
 ↓
Mini exercise
```

Mỗi phase phải có output.

### Components

```text
UserList
   ↓
UserCard
   ↓
UserDetail
```

### RxJS

```text
Search
 ↓
debounceTime
 ↓
distinctUntilChanged
 ↓
switchMap
 ↓
HTTP
```

### DI / Architecture

```text
Component
 ↓
Facade
 ↓
Service
 ↓
HttpClient
 ↓
API
```

### Signals

```text
Service
 ↓
signal()
 ↓
computed()
 ↓
Component
 ↓
Template
```

---

# Final Angular Mental Model

```text
                         Angular App
                              │
              ┌───────────────┼────────────────┐
              ↓               ↓                ↓
         Components        Router             DI
              │               │                │
              ↓               ↓                ↓
          Templates        Features         Services
              │                                │
       ┌──────┼──────┐                         ↓
       ↓      ↓      ↓                       HTTP
    Signals  RxJS  Forms                       │
       │      │      │                         API
       └──────┴──────┘
              │
              ↓
       Change Detection
              │
              ↓
             DOM
```

## Mental model cuối cùng

```text
Standalone first
Signals for reactive state / derived state
RxJS for streams & async composition
DI for dependency management
Reactive Forms for complex forms
Router for application navigation
Facade for feature orchestration
OnPush / Signals / Zoneless for performance
NgModule mainly for legacy
```
