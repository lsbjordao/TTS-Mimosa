// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa niederleinii
const Mimosa_niederleinii = new Mimosa()
Mimosa_niederleinii.specificEpithet = 'niederleinii'

Mimosa_niederleinii.stems = new Stems()

Mimosa_niederleinii.stipule = new Stipule()
Mimosa_niederleinii.stipule.margin = new MarginStipule()
Mimosa_niederleinii.stipule.adaxial = new AdaxialStipule()
Mimosa_niederleinii.stipule.abaxial = new AbaxialStipule()

Mimosa_niederleinii.leaf = new Leaf()
Mimosa_niederleinii.leaf.petiole = new Petiole()
Mimosa_niederleinii.leaf.bipinnate = new Bipinnate()
Mimosa_niederleinii.leaf.bipinnate.rachis = new Rachis()
Mimosa_niederleinii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_niederleinii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_niederleinii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_niederleinii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_niederleinii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_niederleinii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_niederleinii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(24, 42)
Mimosa_niederleinii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_niederleinii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_niederleinii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_niederleinii.inflorescence = new Inflorescence()
Mimosa_niederleinii.inflorescence.peduncle = new Peduncle()
Mimosa_niederleinii.inflorescence.spicate = new Spicate()

Mimosa_niederleinii.flower = new Flower()
Mimosa_niederleinii.flower.bracteole = new Bracteole()
Mimosa_niederleinii.flower.calyx = new Calyx()
Mimosa_niederleinii.flower.corolla = new Corolla()
Mimosa_niederleinii.flower.corolla.shape = 'subtubular'

Mimosa_niederleinii.androecium = new Androecium()
Mimosa_niederleinii.androecium.filaments = new Filaments()
Mimosa_niederleinii.androecium.filaments.colour = 'pinkish'

Mimosa_niederleinii.ginoecium = new Ginoecium()
Mimosa_niederleinii.ginoecium.ovary = new Ovary()

Mimosa_niederleinii.fruit = new Fruit()
Mimosa_niederleinii.fruit.stipe = new Stipe()
Mimosa_niederleinii.fruit.replum = new Replum()
Mimosa_niederleinii.fruit.epicarp = new Epicarp()

Mimosa_niederleinii.seed = new Seed()


// Description authorship
Mimosa_niederleinii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_niederleinii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa niederleinii
export { Mimosa_niederleinii }