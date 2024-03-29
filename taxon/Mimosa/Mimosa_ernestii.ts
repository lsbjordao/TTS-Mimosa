// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems,
    Trichomes,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa ernestii
const Mimosa_ernestii = new Mimosa()
Mimosa_ernestii.specificEpithet = 'ernestii'

Mimosa_ernestii.stems = new Stems()
Mimosa_ernestii.stems.trichomes = new Trichomes()
Mimosa_ernestii.stems.trichomes.setiform = new Setiform()
Mimosa_ernestii.stems.trichomes.setiform.are = 'present'

Mimosa_ernestii.stipule = new Stipule()
Mimosa_ernestii.stipule.margin = new MarginStipule()
Mimosa_ernestii.stipule.adaxial = new AdaxialStipule()
Mimosa_ernestii.stipule.abaxial = new AbaxialStipule()

Mimosa_ernestii.leaf = new Leaf()
Mimosa_ernestii.leaf.petiole = new Petiole()
Mimosa_ernestii.leaf.bipinnate = new Bipinnate()
Mimosa_ernestii.leaf.bipinnate.rachis = new Rachis()
Mimosa_ernestii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ernestii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ernestii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_ernestii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ernestii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 17)
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ernestii.inflorescence = new Inflorescence()
Mimosa_ernestii.inflorescence.peduncle = new Peduncle()
Mimosa_ernestii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ernestii.flower = new Flower()
Mimosa_ernestii.flower.bracteole = new Bracteole()
Mimosa_ernestii.flower.merism = ['4-merous', '5-merous']
Mimosa_ernestii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_ernestii.flower.calyx = new Calyx()
Mimosa_ernestii.flower.calyx.shape = 'campanulate'
Mimosa_ernestii.flower.corolla = new Corolla()
Mimosa_ernestii.flower.corolla.shape = 'campanulate'

Mimosa_ernestii.androecium = new Androecium()
Mimosa_ernestii.androecium.filaments = new Filaments()
Mimosa_ernestii.androecium.filaments.colour = 'whitenish'

Mimosa_ernestii.ginoecium = new Ginoecium()
Mimosa_ernestii.ginoecium.ovary = new Ovary()

Mimosa_ernestii.fruit = new Fruit()
Mimosa_ernestii.fruit.stipe = new Stipe()
Mimosa_ernestii.fruit.replum = new Replum()
Mimosa_ernestii.fruit.epicarp = new Epicarp()

Mimosa_ernestii.seed = new Seed()


// Description authorship
Mimosa_ernestii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ernestii.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = '2018'
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = '43'
source0.number = '1'
source0.pages = '162-197'
Mimosa_ernestii.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = '2020'
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = '272'
source1.pages = '151702'
source1.figure = '2K'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_ernestii.stems.trichomes.setiform.addSource(source1)

// Export Mimosa ernestii
export { Mimosa_ernestii }