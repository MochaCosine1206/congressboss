from rest_framework import routers
from .apis import MembersViewSet, BiographiesViewSet

router = routers.DefaultRouter()
router.register('apis/members', MembersViewSet, 'members')
router.register('apis/biographies', BiographiesViewSet, 'biographies')
urlpatterns = router.urls
