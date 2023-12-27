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
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa niomarlei
const Mimosa_niomarlei = new Mimosa()
Mimosa_niomarlei.specificEpithet = 'niomarlei'

Mimosa_niomarlei.stems = new Stems()

Mimosa_niomarlei.stipule = new Stipule()
Mimosa_niomarlei.stipule.margin = new MarginStipule()
Mimosa_niomarlei.stipule.adaxial = new AdaxialStipule()
Mimosa_niomarlei.stipule.abaxial = new AbaxialStipule()

Mimosa_niomarlei.leaf = new Leaf()
Mimosa_niomarlei.leaf.petiole = new Petiole()
Mimosa_niomarlei.leaf.bipinnate = new Bipinnate()
Mimosa_niomarlei.leaf.bipinnate.rachis = new Rachis()
Mimosa_niomarlei.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_niomarlei.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_niomarlei.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_niomarlei.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_niomarlei.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_niomarlei.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_niomarlei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 19)
Mimosa_niomarlei.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_niomarlei.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_niomarlei.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_niomarlei.inflorescence = new Inflorescence()
Mimosa_niomarlei.inflorescence.peduncle = new Peduncle()
Mimosa_niomarlei.inflorescence.capitate = new CapitateInflorescence()

Mimosa_niomarlei.flower = new Flower()
Mimosa_niomarlei.flower.bracteole = new Bracteole()
Mimosa_niomarlei.flower.calyx = new Calyx()
Mimosa_niomarlei.flower.corolla = new Corolla()
Mimosa_niomarlei.flower.corolla.shape = 'trumpet-shaped'

Mimosa_niomarlei.androecium = new Androecium()
Mimosa_niomarlei.androecium.filaments = new Filaments()
Mimosa_niomarlei.androecium.filaments.colour = 'pinkish'

Mimosa_niomarlei.ginoecium = new Ginoecium()
Mimosa_niomarlei.ginoecium.ovary = new Ovary()

Mimosa_niomarlei.fruit = new Fruit()
Mimosa_niomarlei.fruit.stipe = new Stipe()
Mimosa_niomarlei.fruit.replum = new Replum()
Mimosa_niomarlei.fruit.epicarp = new Epicarp()

Mimosa_niomarlei.seed = new Seed()


// Description authorship
Mimosa_niomarlei.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_niomarlei.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa niomarlei
export { Mimosa_niomarlei }